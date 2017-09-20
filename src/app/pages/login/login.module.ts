import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from '../../app.translation.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgaModule } from '../../theme/nga.module';

import { Login } from './login.component';
import { Feed } from './feed';
import { FeedService } from './feed/feed.service';


import { routing } from './login.routing';
import { SafeUrlFilterModule } from '../../filters/safeurl-filter.module';
import { MomentModule } from 'angular2-moment';
import { UserDataService } from '../../services/userdata.service';


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    HttpModule,   
    SafeUrlFilterModule, 
    MomentModule,
  ],
  declarations: [
    Login,
    Feed,
    
  ],
  providers: [
    FeedService,
    UserDataService,
  ],
})
export class LoginModule {}
