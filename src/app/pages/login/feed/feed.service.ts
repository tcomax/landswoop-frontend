import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class FeedService {

  private _data: any[];
  limit = 10;
  offset = 0;

  constructor(private http: Http) { 
    this.fetchData();
  } 
 
  getData(limit: number, offset: number): any[] {
    this.limit = limit;
    this.offset = offset;
    this.fetchData();
    return this._data;
  }

  fetchData(): void {
    const params = `offset=${this.offset}&limit=${this.limit}`;
    const url = `http://localhost:3000/auth/feeds?${params}`; 
    const headers: Headers = new Headers();      
    headers.append('Content-Type', 'application/x-www-form-urlencoded');    
    const options = new RequestOptions({ headers, withCredentials: true });    
    this.http.get(url, options)     
    .map(res => res.json())
    .subscribe(
      data => { 
        if (data) {
            this._data = data;
            // console.log(`feed data ${JSON.stringify(data)}`);            
        } else {
            // console.log(`undefined feed data ${JSON.stringify(data)}`);            
          this._data = [];
        }
      },
      err => { 
        console.log(err);
        return false;
      },
      () => console.log('get Feeds Complete'),
  );
  }

}
