import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import { routing } from './lands.routing';

import { LandClass } from '../../models/land-class';
import { LandsComponent } from './lands.component';
import { ListLandsComponent } from './components/listLands/list-lands.component';
import { BuyLandsComponent } from './components/buyLands/buy-lands.component';

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
    routing,
    SearchFilterModule,
  ],
  declarations: [
    LandsComponent,
    ListLandsComponent,
    BuyLandsComponent,
  ],  
  providers: [
  ],
  entryComponents: [],
})
export class LandsModule {
}
