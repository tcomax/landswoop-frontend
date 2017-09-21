import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { LandClass } from '../../../../models/land-class';
import { TransactionClass } from '../../../../models/transaction-class';

import { TradeService } from '../../../../services/trade.service';
import { SearchService } from '../../../../services/search.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from './default-modal/default-modal.component';
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
      private uds: UserDataService,   
      private modalService: NgbModal) {
        
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
                let key: any;
                let dLands: LandClass[] = [];
                for (key in payload.data) {
                  if (key) {
                    let land = payload.data[key];
                    console.log(`land in payload: ${land}`);
                    dLands[key] = new LandClass(land.id, land.ownerId,
                      land.description, land.location, land.area, land.available, land.price);
                  }
                }
                this.lands = dLands;           
                // this.lands = this._mds.lands;              
                
                //console.log(`list-Lands: ${JSON.stringify(this.lands)}`);
              }
            },
            error => {
              console.log(`Error getting lands data fro UDS - ${error}`);
            });
    }
  
    newBuyOrder(land: LandClass) {
      // alert(land.id);
      this.trnx = new TransactionClass(
        0, 0, land.id, land.location, land.available, land.area,
      0, land.price, null, 0, 0 );
      const activeModal = this.modalService.open(DefaultModal, { size: 'sm' }); 
      activeModal.componentInstance.modalHeader = 'Buy';
      activeModal.componentInstance.trnx = this.trnx;
      activeModal.componentInstance.land = land;   
    }

  // @Input() lands: LandClass[];
}

