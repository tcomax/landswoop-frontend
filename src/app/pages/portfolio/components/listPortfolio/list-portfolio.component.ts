import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PortfolioClass } from '../../../../models/portfolio-class';
import { OrderClass } from '../../../../models/order-class';

import { TradeService } from '../../../../services/trade.service';
import { SearchService } from '../../../../services/search.service';
import { MockDataService } from '../../../../services/mock-data.service';

import { Subscription } from 'rxjs/Subscription';


import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModal } from './default-modal/default-modal.component';

@Component({
  selector: 'app-list-portfolio',
  templateUrl: './list-portfolio.html',
  providers: [],
})
export class ListPortfolioComponent implements OnDestroy, OnInit {

  order: OrderClass;
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
      this.portfolio = _mds.portfolio;
  }

  @Input() portfolio: PortfolioClass[];

  lgModalShow(portfolioItem: PortfolioClass) {
    // alert(portfolioItem.land.id);
    this.order = new OrderClass(this._mds.orders.length, 'SELL', this._mds.users[0], 
      this._mds.lands[portfolioItem.land.id], portfolioItem.quantity, 
      portfolioItem.quantity * portfolioItem.land.price, 'PENDING', '09/01/2017 10:23:00' );
    const activeModal = this.modalService.open(DefaultModal, { size: 'lg' });
    activeModal.componentInstance.modalHeader = 'Sell Land';
    activeModal.componentInstance.order = this.order;
  }

}

