import { Routes, RouterModule } from '@angular/router';

import { ListLandsComponent } from './list-lands.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ListLandsComponent,
    children: [
    ],
  },
];

export const routing = RouterModule.forChild(routes);
