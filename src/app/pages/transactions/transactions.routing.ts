import { Routes, RouterModule } from '@angular/router';

import { TransactionsComponent } from './transactions.component';
import { ListTransactionsComponent } from './components/listTransactions/list-transactions.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
    children: [
    ],
  },
];

export const routing = RouterModule.forChild(routes);
