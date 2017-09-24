import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalState } from '../../../global.state';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { SearchService } from '../../../services/search.service';
import { Subscription } from 'rxjs/Subscription';
import { UserDataService } from '../../../services/userdata.service';
import { UserClass } from '../../../models/user-class';
import { LandClass } from '../../../models/land-class';
import { OrderClass } from '../../../models/order-class';
import { PortfolioClass } from '../../../models/portfolio-class';
import { CommissionClass } from '../../../models/commission-class';


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
  subscription: Subscription;
  user: UserClass;
  avatarUrl = 'assets/img/app/profile/default.png';
  lands: LandClass;
  portfolio: PortfolioClass;
  transactions: OrderClass;
  earnings: CommissionClass;
  search: string;
  me = 'BaPageTop';
  

  constructor(
    private _state: GlobalState, 
    private searchService: SearchService, 
    private uds: UserDataService,
    private router: Router, private http: Http) {
  
      this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
        this.isMenuCollapsed = isCollapsed;
      });

      this.subscription = this.uds.getData('dashboard').subscribe(
        payload => { 
          // // console.log(`Dashboard : ${JSON.stringify(payload)}`);
          if (payload.sender !== this.me) {
            if (payload.key === 'profile') {
              this.getUserProfile(payload);
              // console.log(`baPageTop payload: ${JSON.stringify(payload)}`);  
              this.user = payload.data;        
              if (this.user !== undefined) {
                this.avatarUrl = this.user.photoUrl;            
                // console.log(`baPageTop avatar: ${this.avatarUrl}`);
              }  
            } else if ((payload.key === 'lands') && (payload.cmd === 'list')) {
              this.getLands(payload);
            } else if (payload.key === 'transactions') {
              if (payload.cmd === 'list') {
                this.getTransactions(payload);  
              } else if (payload.cmd === 'buy') {
                this.uds.setData(this.me, payload.key, payload.cmd, payload.data);                                
              }          
            } else if ((payload.key === 'earnings') && (payload.cmd === 'list')) {
                this.getEarnings(payload);            
            } else if ((payload.key === 'portfolio') && (payload.cmd === 'list')) {
                this.getPortfolio(payload);              
            } else if ((payload.key === 'topbar') && (payload.cmd === 'search')) {
                this.search = payload.data;    
                this.sendMessage(this.search);      
            } 
          }
        },                          
        error => {
          // console.log(`Error getting user data fro UDS - ${error}`);
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
     // console.log('topbar-searchbox text is '.concat(search));
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
      // // console.log(`data => ${data}`);
      if (data.status === 'success') {
        this.router.navigateByUrl('/login');
      }
    },
    err => {
      // console.log(`error => ${err}`);
      this.router.navigateByUrl('/login');      
    },
    () => {
      // console.log('Authentication Complete');
    },
  );
 }

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

 //////////////////  API Query ////////////////////////////
  
 getTransactions(payload: any) {
  const headers: Headers = new Headers();  
  const options = new RequestOptions({ headers, withCredentials: true });  
  this.http.get(`${this.url}/auth/transactions`, options)     
  .map(res => res.json())
  .subscribe(
    data => { 
      this.transactions = data.transactions;
      // console.log(`${this.me} restfully got transaction data for ${JSON.stringify(data)}`);
      this.uds.setData(this.me, 'transactions', payload.cmd, this.transactions);                  
    },
    err => { 
      // console.log(err);
      this.router.navigateByUrl('/login');
    },
    () => console.log('getTransactions Complete'),
  ); 
}

getPortfolio(payload: any) {
  const headers: Headers = new Headers();  
  const options = new RequestOptions({ headers, withCredentials: true });  
  this.http.get(`${this.url}/auth/portfolio`, options)     
  .map(res => res.json())
  .subscribe(
    data => { 
      this.portfolio = data.portfolio;
      // console.log(`${this.me} restfully got portfolio data for ${JSON.stringify(data)}`);
      // console.log(`portfolio ${this.portfolio}`);
      this.uds.setData(this.me, 'portfolio', payload.cmd, this.portfolio);                  
    },
    err => { 
      // console.log(err);
      this.router.navigateByUrl('/login');
    },
    () => console.log('getPortfolio Completed'),
  ); 
}

getEarnings(payload: any) {
  const headers: Headers = new Headers();  
  const options = new RequestOptions({ headers, withCredentials: true });  
  this.http.get(`${this.url}/auth/earnings`, options)     
  .map(res => res.json())
  .subscribe(
    data => { 
      this.earnings = data.earnings;
      // console.log(`${this.me} restfully got earnings data for ${JSON.stringify(data)}`);
      this.uds.setData(this.me, 'earnings', payload.cmd, this.earnings);                  
    },
    err => { 
      // console.log(err);
      this.router.navigateByUrl('/login');
    },
    () => console.log('getEarnings Completed'),
  ); 
}

getLands(payload: any) {
  const headers: Headers = new Headers();  
  const options = new RequestOptions({ headers, withCredentials: true });  
  this.http.get(`${this.url}/auth/lands`, options)     
  .map(res => res.json())
  .subscribe(
    data => { 
      this.lands = data.lands;
      // console.log(`${this.me} restfully got land data for ${JSON.stringify(data)}`);
      // // console.log(`lands ${this.lands}`);
      this.uds.setData(this.me, 'lands', payload.cmd, this.lands);                  
    },
    err => { 
      // console.log(err);
      this.router.navigateByUrl('/login');
    },
    () => console.log('getLands Complete'),
  ); 
}

getUserProfile(payload: any) {
  const headers: Headers = new Headers();  
  const options = new RequestOptions({ headers, withCredentials: true });        
  this.http.get(`${this.url}/auth/profile`, options)     
    .map(res => res.json())
    .subscribe(
      data => { 
        this.user = data.profile;
        // console.log(`${this.me} restfully get user data for ${JSON.stringify(data)}`);
        // console.log(`user ${this.user}`);
        this.uds.setData(this.me, 'profile', payload.cmd, this.user);                  
      },
      err => { 
        // console.log(err);
        this.router.navigateByUrl('/login');
      },
      () => console.log('getUserProfile Complete'),
  ); 
}

}
