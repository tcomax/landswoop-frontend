import { Routes, RouterModule } from '@angular/router';

import { ListCommissionsComponent } from './list-commissions.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ListCommissionsComponent,
    children: [
    ],
  },
];

export const routing = RouterModule.forChild(routes);
