import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { AppTranslationModule } from '../../app.translation.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileComponent } from './profile.component';
import { routing } from './profile.routing';
import { BaPictureUploader } from '../../theme/components/baPictureUploader/baPictureUploader.component';


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
    ProfileComponent,
  ],
  exports: [
  ],
})
export class ProfileModule {}
