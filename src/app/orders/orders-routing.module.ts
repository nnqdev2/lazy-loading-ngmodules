import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderSearchComponent } from './order-search/order-search.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderPage1Component } from './order-page1/order-page1.component';
import { OrdersComponent } from './orders.component';
import { OrderHomeComponent } from './order-home/order-home.component';

const routes: Routes = [
  {
    path: '', component: OrdersComponent,
    children: [
      { path: '', component: OrderHomeComponent },
      { path: 'details-child', component: OrderDetailsComponent }
    ]

  },
  {
    path: 'list',
    component: OrderListComponent
  },
  {
    path: 'search',
    component: OrderSearchComponent
  },
  {
    path: 'page1',
    component: OrderPage1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
