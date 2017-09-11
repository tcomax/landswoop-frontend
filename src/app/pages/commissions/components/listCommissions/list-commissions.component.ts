import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommissionClass } from '../../../../models/commission-class';

import { TradeService } from '../../../../services/trade.service';
import { SearchService } from '../../../../services/search.service';
import { MockDataService } from '../../../../services/mock-data.service';

import { SearchFilterPipe } from '../../../../filters/search-filter.pipe';

import { Subscription } from 'rxjs/Subscription';




@Component({
  selector: 'list-commissions',
  templateUrl: './list-commissions.html',
  providers: [],
})
export class ListCommissionsComponent implements OnDestroy, OnInit {

  message: any;
  subscription: Subscription;

  constructor(
    private _mds: MockDataService, 
    private _ss: SearchService ) {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    // this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.commissions = this._mds.commissions;  
    this.subscription = this._ss.getMessage().subscribe(
      data => { 
        this.message = data; 
        console.log('listCommissionsComponent '.concat(this.message));
      },
      error => {
        console.log('Error listCommissionsComponent '.concat(error));
      });
  }

  @Input() commissions: CommissionClass[];
}

