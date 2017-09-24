import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../theme/nga.module';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './list-portfolio.routing';

import { ListPortfolioComponent } from './list-portfolio.component';
import { PortfolioClass } from '../../../../models/portfolio-class';

import { SearchFilterModule } from '../../../../filters/search-filter.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    NgbDropdownModule, 
    NgbModalModule,
    SearchFilterModule,
  ],
  declarations: [
    //ListPortfolioComponent,
  ],
  providers: [
  ],
  entryComponents: [],
})
export class ListPortfolioModule {}
