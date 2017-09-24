import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { LandClass } from '../../../../models/land-class';
import { TransactionClass } from '../../../../models/transaction-class';

import { TradeService } from '../../../../services/trade.service';
import { SearchService } from '../../../../services/search.service';

import { SearchFilterPipe } from '../../../../filters/search-filter.pipe';

import { UserDataService } from '../../../../services/userdata.service';
import { Subscription } from 'rxjs/Subscription';




@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.html',
  providers: [],
})

export class ListTransactionsComponent implements OnDestroy, OnInit {
  total: number;
  quantity: number;
  message: any;
  subscription: Subscription;
  trxns: TransactionClass[];

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    // this.subscription.unsubscribe();
  }

  ngOnInit() {
/*
    this.subscription = this._ss.getMessage().subscribe(
      data => { 
        this.message = data; 
        console.log('listLandsComponent '.concat(this.message));
        this.uds.setData('listLandsComponent', 'lands', 'reload', {});
      },
      error => {
        console.log('Error listLandsComponent '.concat(error));
      });
     
      this.subscription = this.uds.getData('listLandsComponent').subscribe(
        payload => { 
          if ((payload.key === 'lands') && (payload.sender !== 'listLandsComponent')) {
            this.lands = payload.data;           
            console.log(`list-Lands: ${JSON.stringify(this.lands)}`);
          }
        },
        error => {
          console.log(`Error getting lands data fro UDS - ${error}`);
        });
  */
  }

  constructor(
      private _ts: TradeService, 
      private _ss: SearchService,
      private uds: UserDataService) {
        
        this.subscription = this._ss.getMessage().subscribe(
          data => { 
            this.message = data; 
            console.log('listTransactionsComponent got search for'.concat(this.message));
          },
          error => {
            console.log('Error listTransactionsComponent '.concat(error));
          });
         
          this.subscription = this.uds.getData('listTransactionsComponent').subscribe(
            payload => { 
              if ((payload.key === 'transactions') && (payload.sender !== 'listTransactionsComponent')) {
                let key: any;
                let dTrxns: TransactionClass[] = [];
                for (key in payload.data) {
                  if (key) {
                    let trxn = payload.data[key];
                    // console.log(`trxn in payload: ${JSON.stringify(trxn)}`);
                    dTrxns[key] = new TransactionClass(
                      trxn.id, trxn.type, trxn.land_id, trxn.location, 
                      trxn.available, trxn.area, trxn.qty, trxn.price, 
                      trxn.modified, trxn.amount, trxn.status);
                  }
                }
                this.trxns = dTrxns;           
                // this.lands = this._mds.lands;              
                
                // console.log(`list-trxns: ${JSON.stringify(JSON.stringify(this.trxns))}`);
              }
            },
            error => {
              console.log(`Error getting lands data fro UDS - ${error}`);
            });
    }
  
    showDetails(trxn: TransactionClass) {
    }

  // @Input() lands: LandClass[];
}

