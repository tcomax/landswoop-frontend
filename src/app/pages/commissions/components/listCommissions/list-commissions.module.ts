import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../theme/nga.module';

import { routing } from './list-commissions.routing';

import { ListCommissionsComponent } from './list-commissions.component';
import { CreateOrderComponent } from '../../../orders/components/createOrder/create-order.component';

import { MockDataService } from '../../../../services/mock-data.service';
import { TradeService } from '../../../../services/trade.service';
import { SearchService } from '../../../../services/search.service';

import { SearchFilterModule } from '../../../../filters/search-filter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    SearchFilterModule,
  ],
  declarations: [
    ListCommissionsComponent,
  ],
  providers: [ 
  ],
  entryComponents: [
  ],

})
export class ListCommissionsModule {}
