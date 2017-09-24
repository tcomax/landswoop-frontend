import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { LandClass } from '../../../../models/land-class';
import { TransactionClass } from '../../../../models/transaction-class';

import { TradeService } from '../../../../services/trade.service';
import { SearchService } from '../../../../services/search.service';
import { SearchFilterPipe } from '../../../../filters/search-filter.pipe';

import { UserDataService } from '../../../../services/userdata.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list-lands',
  templateUrl: './list-lands.html',
  providers: [],
})

export class ListLandsComponent implements OnDestroy, OnInit {
  total: number;
  quantity: number;
  message: any;
  subscription: Subscription;
  lands: LandClass[];
  trnx: TransactionClass;
  showBuyForm: boolean[];

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

        this.showBuyForm = [];
        this.subscription = this._ss.getMessage().subscribe(
          data => { 
            this.message = data; 
            console.log('listLandsComponent '.concat(this.message));
            this.uds.setData('listLandsComponent', 'lands', 'list', {});
          },
          error => {
            console.log('Error listLandsComponent '.concat(error));
          });
         
          this.subscription = this.uds.getData('listLandsComponent').subscribe(
            payload => { 
              if ((payload.key === 'lands') && (payload.sender === 'BaPageTop') && (payload.cmd === 'list')) {
                let key: any;
                let dLands: LandClass[] = [];
                for (key in payload.data) {
                  if (key) {
                    let land = payload.data[key];
                    //console.log(`land in payload: ${JSON.stringify(land)}`);
                    this.showBuyForm[land.id] = false;
                    dLands[key] = new LandClass(land.id, land.ownerId,
                      land.description, land.location, land.area, land.available, land.price);
                  }
                }
                this.lands = dLands;           
              }
            },
            error => {
              console.log(`Error getting lands data fro UDS - ${error}`);
            });
    }
  
    newBuyOrder(land: LandClass) {
      // alert(land.id);
      this.uds.setData('listLandsComponent', 'lands', 'buy', land);
    }

}

