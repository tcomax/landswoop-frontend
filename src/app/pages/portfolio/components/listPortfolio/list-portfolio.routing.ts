import { Routes, RouterModule } from '@angular/router';

import { ListPortfolioComponent } from './list-portfolio.component';

import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ListPortfolioComponent,    
    children: [
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
