import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Register } from './register.component';
import { routing }       from './register.routing';
import { SafeUrlFilterModule } from '../../filters/safeurl-filter.module';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
    SafeUrlFilterModule,
  ],
  declarations: [
    Register,
  ],
})
export class RegisterModule {}
