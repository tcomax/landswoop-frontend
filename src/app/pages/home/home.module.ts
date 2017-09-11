import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { Home } from './home.component';
import { routing } from './home.routing';

import { Feed } from './feed';
import { FeedService } from './feed/feed.service';
import { MockDataService } from '../lands/services/mock-data.service';
import { BuyLandService } from '../lands/services/buy-land.service';
//import { LandsComponent } from '../lands/lands.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
  ],
  declarations: [
    Feed,
    Home,
    //LandsComponent,
  ],
  providers: [
    FeedService,
    BuyLandService,
    MockDataService,
  ],
})
export class HomeModule {}
