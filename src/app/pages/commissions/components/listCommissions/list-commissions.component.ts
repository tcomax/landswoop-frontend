import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommissionClass } from '../../../../models/commission-class';

import { TradeService } from '../../../../services/trade.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchFilterPipe } from '../../../../filters/search-filter.pipe';

import { UserDataService } from '../../../../services/userdata.service';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from '../../../../services/search.service';

@Component({
  selector: 'list-commissions',
  templateUrl: './list-commissions.html',
  providers: [],
})
export class ListCommissionsComponent implements OnDestroy, OnInit {

  message: any;
  commissions: CommissionClass[];
  subscription: Subscription;

  constructor(
    private _ts: TradeService, 
    private _ss: SearchService,
    private uds: UserDataService,   
    private modalService: NgbModal) {
      
      this.subscription = this._ss.getMessage().subscribe(
        data => { 
          this.message = data; 
          console.log('listCommissionsComponent '.concat(this.message));
          this.uds.setData('listCommissionsComponent', 'commissions', 'reload', {});
        },
        error => {
          console.log('Error listTransactionsComponent '.concat(error));
        });
       
        this.subscription = this.uds.getData('listCommissionsComponent').subscribe(
          payload => { 
            if ((payload.key === 'earnings') && (payload.sender !== 'listCommissionsComponent')) {
              let key: any;
              let dComms: CommissionClass[] = [];
              for (key in payload.data) {
                if (key) {
                  let comm = payload.data[key];
                  console.log(`list-commissions comm: ${JSON.stringify(JSON.stringify(comm))}`);                  
                  dComms[key] = new CommissionClass(
                    comm.id, comm.type, comm.rate, comm.commission, comm.trxn_id,
                    comm.amount, comm.buyer, comm.location, comm.status, comm.modified);
                }
              }
              this.commissions = dComms;                     
              console.log(`list-commissions: ${JSON.stringify(JSON.stringify(this.commissions))}`);
            }
          },
          error => {
            console.log(`Error getting lands data fro UDS - ${error}`);
          });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    // this.subscription.unsubscribe();
  }

  ngOnInit() {}
}

