import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../theme/nga.module';

import { routing } from './create-order.routing';

import { CreateOrderComponent } from './create-order.component';


import { MockDataService } from '../../../../services/mock-data.service';
import { TradeService } from '../../../../services/trade.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    CreateOrderComponent,
  ],
  providers: [
  ],
})
export class CreateOrderModule {}
