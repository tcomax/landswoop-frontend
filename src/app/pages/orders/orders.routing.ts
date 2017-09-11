import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { ListOrdersComponent } from './components/listOrders/list-orders.component';
import { CreateOrderComponent } from './components/createOrder/create-order.component';


import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: 'create',
        component: CreateOrderComponent,
      },
      {      
        path: 'list',        
        component: ListOrdersComponent,
      }
    ],
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
