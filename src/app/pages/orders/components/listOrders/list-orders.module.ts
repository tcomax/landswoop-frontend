import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../theme/nga.module';

import { routing } from './list-orders.routing';

import { ListOrdersComponent } from './list-orders.component';


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
    ListOrdersComponent,
  ],
  providers: [
  ],
})
export class ListOrdersModule {}
