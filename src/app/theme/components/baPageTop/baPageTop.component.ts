import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalState } from '../../../global.state';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { SearchService } from '../../../services/search.service';


@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
  styleUrls: ['./baPageTop.scss'],
  providers: [],
  
})
export class BaPageTop {

  isScrolled: boolean = false;
  isMenuCollapsed: boolean = false;
  url: string = 'http://localhost:3000';
  headers: Headers = new Headers();
  

  constructor(private _state: GlobalState, private searchService: SearchService, 
    private router: Router, private http: Http) {
      this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
        this.isMenuCollapsed = isCollapsed;
      });
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  } 

  scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
  
 sendMessage(search: string): void { 
     // send message to subscribers via observable subject
     this.searchService.sendMessage(search);
     // let link = ['/pages/lands'];
     // this.router.navigate(link);
     console.log('topbar-searchbox text is '.concat(search));
      // alert(search);
     
 }

 clearMessage(): void {
     // clear messagey
     this.searchService.clearMessage();
 }

 onSignOut(): void {
  this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
  const options = new RequestOptions({ headers: this.headers, withCredentials: true });
  
  this.http.get(`${this.url}/auth/logout`, options)     
  .map(res => res.json())
  .subscribe(
    data => { 
      console.log(`data => ${data}`);
      if (data.status === 'success') {
        this.router.navigateByUrl('/login');
      }
    },
    err => {
      console.log(`error => ${err}`);
      this.router.navigateByUrl('/login');      
    },
    () => {
      console.log('Authentication Complete');
    },
  );
 }

 /*
 onProfile(): void {
  this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
  const options = new RequestOptions({ headers: this.headers, withCredentials: true });
  this.http.get(`${this.url}/auth/profile`, options)     
  .map(res => res.json())
  .subscribe(
    data => { 
      console.log(`data => ${data}`);
      if (data.status === 'success') {
        this.router.navigateByUrl('/profile');
      }
    },
    err => {
      console.log(`error => ${err}`);
      this.router.navigateByUrl('/dashboard');
      
    },
    () => {
      console.log('Authentication Complete');
    },
  );
 }*/

 onSettings(): void {
  this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
  const options = new RequestOptions({ headers: this.headers, withCredentials: true }); 
  this.router.navigateByUrl('/pages/settings');
 }

 onProfile(): void {
  this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
  const options = new RequestOptions({ headers: this.headers, withCredentials: true }); 
  this.router.navigateByUrl('/pages/profile');
 }
}
