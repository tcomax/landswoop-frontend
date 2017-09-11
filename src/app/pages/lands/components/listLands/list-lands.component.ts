import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { LandClass } from '../../../../models/land-class';
import { OrderClass } from '../../../../models/order-class';

import { TradeService } from '../../../../services/trade.service';
import { SearchService } from '../../../../services/search.service';
import { MockDataService } from '../../../../services/mock-data.service';


import { Subscription } from 'rxjs/Subscription';
import { CreateOrderComponent } from '../../../orders/components/createOrder/create-order.component';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from './default-modal/default-modal.component';
import { SearchFilterPipe } from '../../../../filters/search-filter.pipe';




@Component({
  selector: 'app-list-lands',
  templateUrl: './list-lands.html',
  providers: [],
})

export class ListLandsComponent implements OnDestroy, OnInit {
  order: OrderClass;
  total: number;
  quantity: number;
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
        console.log('listLandsComponent '.concat(this.message));
      },
      error => {
        console.log('Error listLandsComponent '.concat(error));
      });
  }

  constructor(
      private _mds: MockDataService, 
      private _ts: TradeService, 
      private _ss: SearchService,
      private modalService: NgbModal) {
  }
  
    lgModalShow(land: LandClass) {
      // alert(land.id);
      this.order = new OrderClass(this._mds.orders.length, 'BUY',
        this._mds.users[0], this._mds.lands[land.id], 0, 0, 'PENDING', '09/01/2017 10:23:00' );
      const activeModal = this.modalService.open(DefaultModal, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Buy Land';
      activeModal.componentInstance.order = this.order;
    }

  @Input() lands: LandClass[];
}

