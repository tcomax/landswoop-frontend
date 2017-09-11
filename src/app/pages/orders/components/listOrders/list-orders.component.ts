import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { OrderClass } from '../../../../models/order-class';

import { TradeService } from '../../../../services/trade.service';
import { SearchService } from '../../../../services/search.service';
import { MockDataService } from '../../../../services/mock-data.service';


import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.html',
  providers: [],
})
export class ListOrdersComponent implements OnDestroy, OnInit {

  message: any;
  subscription: Subscription;

  constructor(
    private _mds: MockDataService, 
    private _ts: TradeService, 
    private _ss: SearchService) {
  
}

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    // this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.orders = this._mds.orders;
    this.subscription = this._ss.getMessage().subscribe(
      data => { 
        this.message = data; 
        console.log('listOrdersComponent '.concat(this.message));
      },
      error => {
        console.log('Error listOrdersComponent '.concat(error));
      });
  }

  @Input() orders: OrderClass[];
}

