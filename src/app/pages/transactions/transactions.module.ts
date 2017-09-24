import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import { routing } from './transactions.routing';

import { TransactionClass } from '../../models/transaction-class';
import { TransactionsComponent } from './transactions.component';
import { ListTransactionsComponent } from './components/listTransactions/list-transactions.component';

import { TradeService } from '../../services/trade.service';
import { SearchService } from '../../services/search.service';
import { SearchFilterModule } from '../../filters/search-filter.module';


@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    AppTranslationModule,
    NgaModule,
    NgbRatingModule,
    NgbModalModule,    
    routing,
    SearchFilterModule,
  ],
  declarations: [
    TransactionsComponent,
    ListTransactionsComponent,
  ],  
  providers: [
  ],
  entryComponents: [],
})
export class TransactionsModule {
}
