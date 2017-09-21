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
  

  constructor(
    private _state: GlobalState, 
    private searchService: SearchService, 
    private uds: UserDataService,
    private router: Router, private http: Http) {
  
      this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
        this.isMenuCollapsed = isCollapsed;
      });
  
      this.getUser();
      this.getTransactions();
      this.getLands();
      this.getEarnings();
      this.getPortfolio();

  this.subscription = this.uds.getData('dashboard').subscribe(
    payload => { 
      //console.log(`Dashboard : ${JSON.stringify(payload)}`);
      if (payload.sender !== 'BaPageTop') {
        if (payload.cmd === 'relay') {
          if (payload.key === 'profile') {
            console.log(`baPageTop payload: ${JSON.stringify(payload)}`);  
            this.user = payload.data;        
            if (this.user !== undefined) {
              this.avatarUrl = this.user.photoUrl;            
              console.log(`baPageTop avatar: ${this.avatarUrl}`);
            }
            this.uds.setData('dashboard', 'profile', 'update', payload.data);
          } else if (payload.key === 'lands') {
            this.uds.setData('dashboard', 'lands', 'update', payload.data);
          } else if (payload.key === 'transactions') {
            this.uds.setData('dashboard', 'transactions', 'update', payload.data);                                
          } else if (payload.key === 'earnings') {
            this.uds.setData('dashboard', 'earnings', 'update', payload.data);                                 
          } else if (payload.key === 'portfolio') {
            this.uds.setData('dashboard', 'portfolio', 'update', payload.data); 
          }
        } else if (payload.cmd === 'reload') {
          if (payload.key === 'profile') {
            this.getUser();
          } else if (payload.key === 'lands') {
            this.getLands();
          } else if (payload.key === 'transactions') {
             this.getTransactions();             
          } else if (payload.key === 'earnings') {
              this.getEarnings();            
          } else if (payload.key === 'portfolio') {
              this.getPortfolio();              
          }
        }
      }
    },                          
    error => {
      console.log(`Error getting user data fro UDS - ${error}`);
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
  
 getTransactions() {
  const headers: Headers = new Headers();  
  const options = new RequestOptions({ headers, withCredentials: true });  
  this.http.get(`${this.url}/auth/transactions`, options)     
  .map(res => res.json())
  .subscribe(
    resp => { 
      this.transactions = resp.data;
      console.log(`BaPageTop restfully got transaction data for ${JSON.stringify(resp)}`);
      this.uds.setData('BaPageTop', 'transactions', 'update', this.transactions);                  
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
      this.portfolio = resp.data;
      console.log(`BaPageTop restfully got portfolio data for ${JSON.stringify(resp)}`);
      console.log(`portfolio ${this.portfolio}`);
      this.uds.setData('BaPageTop', 'portfolio', 'update', this.portfolio);                  
    },
    err => { 
      console.log(err);
      this.router.navigateByUrl('/login');
    },
    () => console.log('Got Portfolio'),
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
      console.log(`BaPageTop restfully got earnings data for ${JSON.stringify(resp)}`);
      this.uds.setData('BaPageTop', 'earnings', 'update', this.earnings);                  
    },
    err => { 
      console.log(err);
      this.router.navigateByUrl('/login');
    },
    () => console.log('got Earnings'),
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
      this.uds.setData('BaPageTop', 'lands', 'update', this.lands);                  
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
        console.log(`BaPageTop restfully get user data for ${JSON.stringify(resp)}`);
        console.log(`user ${this.user}`);
        this.uds.setData('BaPageTop', 'profile', 'update', this.user);                  
      },
      err => { 
        console.log(err);
        this.router.navigateByUrl('/login');
      },
      () => console.log('Authentication Complete'),
  ); 
}

}
