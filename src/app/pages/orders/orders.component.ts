import { Component, Input } from '@angular/core';
import { MockDataService } from '../../services/mock-data.service';
import { OrderClass } from '../../models/order-class';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.html',
  providers: [],
})
export class OrdersComponent {

  orders: OrderClass[]; 
  constructor(private _mds: MockDataService) {
    this.orders = _mds.orders;
  }

  // @Input() orders: OrderClass[];
}
