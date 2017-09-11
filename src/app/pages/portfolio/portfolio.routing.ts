import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';
import { ListPortfolioComponent } from './components/listPortfolio/list-portfolio.component';

import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    children: [
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
