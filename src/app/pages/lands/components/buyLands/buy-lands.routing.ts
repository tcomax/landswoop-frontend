import { Routes, RouterModule } from '@angular/router';

import { BuyLandsComponent } from './buy-lands.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: BuyLandsComponent,
    children: [
    ],
  },
];

export const routing = RouterModule.forChild(routes);
