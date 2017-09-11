import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { AppTranslationModule } from '../../app.translation.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { SettingsComponent } from './settings.component';
import { routing } from './settings.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    CommonModule,
    AppTranslationModule,
    NgaModule,
    NgbRatingModule,
    NgbModalModule,    
    routing,
  ],
  declarations: [
    SettingsComponent,
  ],
  exports: [
  ],
})
export class SettingsModule {}
