import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { UserDataService } from '../../../../../services/userdata.service';
import { Subscription } from 'rxjs/Subscription';

import { LandClass } from '../../../../../models/land-class';
import { OrderClass } from '../../../../../models/order-class';
import { TransactionClass } from '../../../../../models/transaction-class';


import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'add-service-modal',
  styleUrls: [('./default-modal.component.scss')],
  templateUrl: './default-modal.component.html',
})

export class DefaultModal implements OnInit {
  subscription: Subscription;  
  quantity: number;
  trnx: TransactionClass;
  modalHeader: string;
  modalContent: string = ``;
  land: LandClass;
  url: string = 'http://localhost:3000';
  headers: Headers = new Headers();
  

  constructor(
    private activeModal: NgbActiveModal, 
    private uds: UserDataService,
    private router: Router, 
    private http: Http) {
  
    }

  ngOnInit() {
    this.getDocuments(this.trnx.id);              
  }

  closeModal() {
    this.activeModal.close();
  }

  getOrderTotal(quantity) {
    if (!isFinite(quantity)) {
      quantity = 0;
    }
    this.trnx.quantity = parseFloat(quantity);
    this.trnx.total = this.trnx.quantity * this.trnx.price;
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
  createTransaction(trnx: TransactionClass) {
    const headers: Headers = new Headers();  
    headers.append('Content-Type', 'application/json;charset=UTF-8'); 
    const options = new RequestOptions({ headers, withCredentials: true }); 
    const body = `${JSON.stringify(trnx)}`;
    console.log(`trnx: ${JSON.stringify(trnx)}`);    
    this.http.post(`${this.url}/auth/transactions`, body, options)  
    .map(res => res.json()) 
    .subscribe(
      resp => { 
        console.log(`createTransactions resp: ${JSON.stringify(resp.statusText)}`);
        
        if (resp.statusText === 'success') {
          this.activeModal.close();          
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
}
