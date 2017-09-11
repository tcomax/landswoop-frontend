import { Routes, RouterModule } from '@angular/router';

import { LandsComponent } from './lands.component';
import { ListLandsComponent } from './components/listLands/list-lands.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: LandsComponent,
    children: [
    ],
  },
];

export const routing = RouterModule.forChild(routes);
