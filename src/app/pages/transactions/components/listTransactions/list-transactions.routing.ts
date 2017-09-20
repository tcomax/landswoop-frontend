import { Routes, RouterModule } from '@angular/router';

import { ListTransactionsComponent } from './list-transactions.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ListTransactionsComponent,
    children: [
    ],
  },
];

export const routing = RouterModule.forChild(routes);
