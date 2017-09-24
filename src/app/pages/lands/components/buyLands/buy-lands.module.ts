import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../theme/nga.module';

import { routing } from './buy-lands.routing';

import { BuyLandsComponent } from './buy-lands.component';

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
   // BuyLandsComponent
  ],
  providers: [ 
  ],
  entryComponents: [
  ],

})
export class BuyLandsModule {}
