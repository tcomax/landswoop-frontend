import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';

import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
    ],
  },
];

export const routing = RouterModule.forChild(routes);
