import { Routes, RouterModule } from '@angular/router';

import { CommissionsComponent } from './commissions.component';
import { ListCommissionsComponent } from './components/listCommissions/list-commissions.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: CommissionsComponent,
    children: [
    ],
  },
];

export const routing = RouterModule.forChild(routes);
