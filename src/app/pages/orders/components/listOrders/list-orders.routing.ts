import { Routes, RouterModule } from '@angular/router';

import { ListOrdersComponent } from './list-orders.component';

import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ListOrdersComponent,
    children: [
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
