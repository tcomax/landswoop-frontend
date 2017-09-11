import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './orders.routing';
import { OrdersComponent } from './orders.component';

import { ListOrdersComponent } from './components/listOrders/list-orders.component';
import { CreateOrderComponent } from './components/createOrder/create-order.component';


import { MockDataService } from '../../services/mock-data.service';
import { TradeService } from '../../services/trade.service';
import { SearchService } from '../../services/search.service';
import { SearchFilterModule } from '../../filters/search-filter.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    SearchFilterModule,
  ],
  declarations: [
    OrdersComponent,
    ListOrdersComponent,
    CreateOrderComponent,
  ],
  providers: [
  ],
})
export class OrdersModule {}
