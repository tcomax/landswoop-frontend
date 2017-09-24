import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { UserDataService } from '../../../../services/userdata.service';
import { Subscription } from 'rxjs/Subscription';

import { LandClass } from '../../../../models/land-class';
import { DocumentClass } from '../../../../models/document-class';
import { TransactionClass } from '../../../../models/transaction-class';


import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buy-lands',
  templateUrl: './buy-lands.html',
  providers: [],
})

export class BuyLandsComponent implements OnInit {
  subscription: Subscription;  
  quantity: number;
  trxn: TransactionClass;
  documents: Document

  url: string = 'http://localhost:3000';
  headers: Headers = new Headers();
  

  constructor(
    private uds: UserDataService,
    private router: Router, 
    private http: Http) {
      console.log(`BuyLandsComponent land: ${JSON.stringify(this.land)}`);          
      
        this.trxn = new TransactionClass(null, 0, 0, null, 0, 0, 0, 0, null, 0, 10);
     /* this.subscription = this.uds.getData('buyLandsComponent').subscribe(
        payload => { 
          console.log(`BuyLandsComponent payload: ${JSON.stringify(payload)}`);          
          if ((payload.key === 'lands') && (payload.sender === 'landsComponent') && (payload.cmd === 'buy')) {
            console.log(`BuyLandsComponent payload data: ${JSON.stringify(payload.data)}`);     
            const land = payload.data;                        
            this.trxn.landId = land.id;
            this.trxn.location = land.location;
            this.trxn.available = land.available; 
            this.trxn.area = land.area;
            this.trxn.price = land.price;
            console.log(`BuyLandsComponent trxn: ${JSON.stringify(this.trxn)}`);                 
          }
        },
        error => {
          console.log(`Error getting lands data fro UDS - ${error}`);
        }); */
  }

  ngOnInit() {
    this.getDocuments(this.land.id);              
  }

  getOrderTotal(quantity) {
    if (!isFinite(quantity)) {
      quantity = 0;
    }
    this.trxn.quantity = parseFloat(quantity);
    this.trxn.total = quantity * this.land.price;    
  }

  getDocuments(landId: number) {
    const headers: Headers = new Headers();  
    const options = new RequestOptions({ headers, withCredentials: true });  
    this.http.get(`${this.url}/auth/documents/?landId=${landId}`, options)  
    .map(res => res.json()) 
    .subscribe(
      resp => {         
        if (resp.statusText === 'success') {
          console.log(` getDocuments resp: ${JSON.stringify(resp.statusText)}`);          
          // get land referred to by transaction
          // documents of land
        }
      },
      err => { 
        console.log(err);
        this.router.navigateByUrl('/login');
      },
      () => console.log('got documents'),
    ); 
     
  }
  createTransaction() {
    this.trxn.location = this.land.location;
    this.trxn.available = this.land.available;
    this.trxn.area = this.land.area;
    this.trxn.price = this.land.price;
    this.trxn.landId = this.land.id;
    
    const headers: Headers = new Headers();  
    headers.append('Content-Type', 'application/json;charset=UTF-8'); 
    const options = new RequestOptions({ headers, withCredentials: true }); 
    const body = `${JSON.stringify(this.trxn)}`;
    console.log(`trnx: ${JSON.stringify(this.trxn)}`);    
    this.http.post(`${this.url}/auth/transactions`, body, options)  
    .map(res => res.json()) 
    .subscribe(
      resp => { 
        console.log(`createTransactions resp: ${JSON.stringify(resp.statusText)}`);
        
        if (resp.statusText === 'success') {
          this.router.navigateByUrl('/pages/transactions');            
        }
      },
      err => { 
        console.log(err);
        this.router.navigateByUrl('/login');
      },
      () => console.log('Transaction Sent'),
    ); 
     
  }  
  @Input() land: LandClass;
}
