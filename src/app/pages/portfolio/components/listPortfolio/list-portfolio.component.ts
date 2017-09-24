import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PortfolioClass } from '../../../../models/portfolio-class';
import { TransactionClass } from '../../../../models/transaction-class';

import { TradeService } from '../../../../services/trade.service';
import { SearchService } from '../../../../services/search.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchFilterPipe } from '../../../../filters/search-filter.pipe';

import { UserDataService } from '../../../../services/userdata.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-portfolio',
  templateUrl: './list-portfolio.html',
  providers: [],
})
export class ListPortfolioComponent implements OnDestroy, OnInit {

  folio: PortfolioClass[];
  message: any;
  subscription: Subscription;

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    // this.subscription.unsubscribe();
  }

  ngOnInit() {

    this.subscription = this._ss.getMessage().subscribe(
      data => { 
        this.message = data; 
        console.log('listPortfolioComponent '.concat(this.message));
      },
      error => {
        console.log('Error listPortfolioComponent '.concat(error));
      });
  }

  constructor(
    private _ts: TradeService, 
    private _ss: SearchService,
    private uds: UserDataService,   
    private router: Router) {
      
      this.subscription = this._ss.getMessage().subscribe(
        data => { 
          this.message = data; 
          console.log('listPortfolioComponent '.concat(this.message));
        },
        error => {
          console.log('Error listPortfolioComponent '.concat(error));
        });
       
        this.subscription = this.uds.getData('listPortfolioComponent').subscribe(
          payload => { 
            if ((payload.key === 'portfolio') && (payload.sender !== 'listPortfolioComponent')) {
              let key: any;
              let dFolio: PortfolioClass[] = [];
              for (key in payload.data) {
                if (key) {
                  let folio = payload.data[key];
                   console.log(`folio in payload: ${JSON.stringify(folio)}`);
                  dFolio[key] = new PortfolioClass(
                    folio.id, folio.land_id, folio.quantity, 
                    folio.total, folio.location);
                }
              }
              this.folio = dFolio;           
              // this.lands = this._mds.lands;              
              
              // console.log(`list-trnxs: ${JSON.stringify(JSON.stringify(this.trnxs))}`);
            }
          },
          error => {
            console.log(`Error getting portfolio data from UDS - ${error}`);
          });
  }

  @Input() portfolio: PortfolioClass[];

  showTransactions(trxnSet: PortfolioClass) {
    this.router.navigateByUrl('/pages/transactions');
    this.uds.setData('listPortfolioComponent', 'topbar', 'search', trxnSet.location);    
  }

}

