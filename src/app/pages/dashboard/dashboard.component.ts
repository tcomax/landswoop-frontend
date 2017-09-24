import { Component } from '@angular/core';
import { UserDataService } from '../../services/userdata.service';
import { UserClass } from '../../models/user-class';
import { LandClass } from '../../models/land-class';
import { TransactionClass } from '../../models/transaction-class';
import { PortfolioClass } from '../../models/portfolio-class';
import { CommissionClass } from '../../models/commission-class';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  subscription: Subscription;
  user: UserClass;
  lands: LandClass;
  portfolios: PortfolioClass;
  transactions: TransactionClass;
  earnings: CommissionClass;
  url: string = 'http://localhost:3000';

  constructor (
    private uds: UserDataService, 
    private router: Router, 
    private http: Http,  
  ) {
/*
    this.subscription = this.uds.getData('dashboard').subscribe(
      payload => { 
        // console.log(`Dashboard : ${JSON.stringify(payload)}`);
        if (payload.sender !== 'BaPageTop') {
          if (payload.key === 'profile') {
            this.getUserProfile(payload);
            console.log(`baPageTop payload: ${JSON.stringify(payload)}`);  
            this.user = payload.data;        
            if (this.user !== undefined) {
              this.avatarUrl = this.user.photoUrl;            
              console.log(`baPageTop avatar: ${this.avatarUrl}`);
            }  
          } else if ((payload.key === 'lands') && (payload.cmd === 'list')) {
            this.getLands(payload);
          } else if ((payload.key === 'transactions') && (payload.cmd === 'list')) {
             this.getTransactions(payload);             
          } else if ((payload.key === 'earnings') && (payload.cmd === 'list')) {
              this.getEarnings(payload);            
          } else if ((payload.key === 'portfolio') && (payload.cmd === 'list')) {
              this.getPortfolio(payload);              
          }
        }
      },                          
      error => {
        console.log(`Error getting user data fro UDS - ${error}`);
      });  */
  }
 //////////////////  API Query ////////////////////////////
  
  getTransactions() {
    const headers: Headers = new Headers();  
    const options = new RequestOptions({ headers, withCredentials: true });  
    this.http.get(`${this.url}/auth/transactions`, options)     
    .map(res => res.json())
    .subscribe(
      resp => { 
        this.transactions = resp.data;
        console.log(`Dashboard restfully got transaction data for ${JSON.stringify(resp)}`);
        this.uds.setData('dashboard', 'transactions', 'update', this.transactions);                  
      },
      err => { 
        console.log(err);
        this.router.navigateByUrl('/login');
      },
      () => console.log('Authentication Complete'),
    ); 
  }

  getPortfolio() {
    const headers: Headers = new Headers();  
    const options = new RequestOptions({ headers, withCredentials: true });  
    this.http.get(`${this.url}/auth/portfolio`, options)     
    .map(res => res.json())
    .subscribe(
      resp => { 
        this.portfolios = resp.data;
        console.log(`Dashboard restfully got portfolio data for ${JSON.stringify(resp)}`);
        console.log(`user ${this.portfolios}`);
        this.uds.setData('dashboard', 'portfolios', 'update', this.portfolios);                  
      },
      err => { 
        console.log(err);
        this.router.navigateByUrl('/login');
      },
      () => console.log('Authentication Complete'),
    ); 
  }

  getEarnings() {
    const headers: Headers = new Headers();  
    const options = new RequestOptions({ headers, withCredentials: true });  
    this.http.get(`${this.url}/auth/earnings`, options)     
    .map(res => res.json())
    .subscribe(
      resp => { 
        this.earnings = resp.data;
        console.log(`Dashboard restfully got earnings data for ${JSON.stringify(resp)}`);
        this.uds.setData('dashboard', 'commissions', 'update', this.earnings);                  
      },
      err => { 
        console.log(err);
        this.router.navigateByUrl('/login');
      },
      () => console.log('Authentication Complete'),
    ); 
  }

  getLands() {
    const headers: Headers = new Headers();  
    const options = new RequestOptions({ headers, withCredentials: true });  
    this.http.get(`${this.url}/auth/lands`, options)     
    .map(res => res.json())
    .subscribe(
      resp => { 
        this.lands = resp.data;
        //console.log(`Dashboard restfully got land data for ${JSON.stringify(resp)}`);
        //console.log(`lands ${this.lands}`);
        this.uds.setData('dashboard', 'lands', 'update', this.lands);                  
      },
      err => { 
        console.log(err);
        this.router.navigateByUrl('/login');
      },
      () => console.log('Authentication Complete'),
    ); 
  }

  getUser() {
    const headers: Headers = new Headers();  
    const options = new RequestOptions({ headers, withCredentials: true });        
    this.http.get(`${this.url}/auth/profile`, options)     
      .map(res => res.json())
      .subscribe(
        resp => { 
          this.user = resp.profile;
          console.log(`Dashboard restfully get user data for ${JSON.stringify(this.user)}`);
          console.log(`user ${this.user}`);
          this.uds.setData('dashboard', 'profile', 'update', this.user);                  
        },
        err => { 
          console.log(err);
          this.router.navigateByUrl('/login');
        },
        () => console.log('Authentication Complete'),
    ); 
  }

}
