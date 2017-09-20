import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { UserDataService } from '../../../../../services/userdata.service';
import { Subscription } from 'rxjs/Subscription';

import { LandClass } from '../../../../../models/land-class';
import { DocumentClass } from '../../../../../models/document-class';
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
  modalHeader: string;
  modalContent: string = ``;
  trnx: TransactionClass;
  land: LandClass;
  documents: DocumentClass[];
  url: string = 'http://localhost:3000';
  headers: Headers = new Headers();
  

  constructor(
    private activeModal: NgbActiveModal, 
    private uds: UserDataService,
    private router: Router, 
    private http: Http) {
  
    }

  ngOnInit() {
    this.getTransactionDetails(this.trnx);
  }

  closeModal() {
    this.activeModal.close();
  }


  getDocuments(landId: number) {
    const headers: Headers = new Headers();  
    const options = new RequestOptions({ headers, withCredentials: true });   
    this.http.get(`${this.url}/auth/documets/land/${landId}`, options)  
    .map(res => res.json()) 
    .subscribe(
      resp => { 
        console.log(` resp: ${JSON.stringify(resp.statusText)}`);
        
        if (resp.statusText === 'success') {
          // get land referred to by transaction
          // documents of land
        }
      },
      err => { 
        console.log(err);
        this.router.navigateByUrl('/login');
      },
      () => console.log('got transaction'),
    ); 
     
  }

  getLandDetails(landId: number) {
    const headers: Headers = new Headers();  
    const options = new RequestOptions({ headers, withCredentials: true });    
    this.http.get(`${this.url}/auth/lands/${landId}`, options)  
    .map(res => res.json()) 
    .subscribe(
      resp => { 
        console.log(` resp: ${JSON.stringify(resp.statusText)}`);
        
        if (resp.statusText === 'success') {
          // get land referred to by transaction
          // documents of land
        }
      },
      err => { 
        console.log(err);
        this.router.navigateByUrl('/login');
      },
      () => console.log('got transaction'),
    ); 
     
  }

  getTransactionDetails(trnx: TransactionClass) {
    const headers: Headers = new Headers();  
    const options = new RequestOptions({ headers, withCredentials: true }); 
    const body = `${JSON.stringify(trnx)}`;
    console.log(`trnx: ${JSON.stringify(trnx)}`);    
    this.http.get(`${this.url}/auth/transactions/${trnx.id}`, options)  
    .map(res => res.json()) 
    .subscribe(
      resp => { 
        console.log(` resp: ${JSON.stringify(resp.statusText)}`);
        
        if (resp.statusText === 'success') {
          this.getLandDetails(trnx.landId);
          this.getDocuments(trnx.landId);
          
        }
      },
      err => { 
        console.log(err);
        this.router.navigateByUrl('/login');
      },
      () => console.log('got transaction'),
    ); 
     
  }
}
