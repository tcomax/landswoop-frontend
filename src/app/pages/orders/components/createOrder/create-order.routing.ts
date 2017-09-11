import { Routes, RouterModule } from '@angular/router';

import { CreateOrderComponent } from './create-order.component';

import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: CreateOrderComponent,
    children: [
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
