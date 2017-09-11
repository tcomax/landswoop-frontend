import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './commissions.routing';

import { CommissionsComponent } from './commissions.component';
import { ListCommissionsComponent } from './components/listCommissions/list-commissions.component';
import { MockDataService } from '../../services/mock-data.service';

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
    CommissionsComponent,
    ListCommissionsComponent,
  ],
  providers: [
  ],
})
export class CommissionsModule {
}
