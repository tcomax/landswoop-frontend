import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './portfolio.routing';

import { LandClass } from '../..//models/land-class';
import { PortfolioComponent } from './portfolio.component';
import { ListPortfolioComponent } from './components/listPortfolio/list-portfolio.component';
import { DefaultModal } from './components/listPortfolio/default-modal/default-modal.component';

import { MockDataService } from '../../services/mock-data.service';
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
    ListPortfolioComponent,
    PortfolioComponent,
    DefaultModal,
  ],  
  providers: [
    MockDataService,
    TradeService,    
  ],
  entryComponents: [DefaultModal],
})
export class PortfolioModule {
}
