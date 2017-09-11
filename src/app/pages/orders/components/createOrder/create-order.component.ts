import { Component, OnInit, Input } from '@angular/core';

import { TradeService } from '../../../../services/trade.service';
import { Subscription } from 'rxjs/Subscription';

import { OrderClass } from '../../../../models/order-class';
import { LandClass } from '../../../../models/land-class';


import { MockDataService } from '../../../../services/mock-data.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})


export class CreateOrderComponent implements OnInit {

  order: OrderClass;

  constructor(private _ts: TradeService ) { 
      this._ts.buyRequested$.subscribe(
      land => {
          this.order.land = land;
          this.order.quantity = 0;
          this.order.total = 0;
      });
  
  }
  
  ngOnInit() {
  }

  @Input() land: LandClass;

  getOrderTotal(quantity) {
    if (!isFinite(quantity)) {
      quantity = 0;
    }
    this.order.quantity = parseFloat(quantity);
    this.order.total = this.order.quantity * this.land.price;
  }

  payRequest() {
    // let myIndex = Math.random();
    // this.bls.executeBuyRequest(this.land);
  }

}
