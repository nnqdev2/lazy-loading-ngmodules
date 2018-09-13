import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderSearchComponent } from './order-search/order-search.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderPage1Component } from './order-page1/order-page1.component';
import { OrdersComponent } from './orders.component';
import { OrderHomeComponent } from './order-home/order-home.component';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [OrderListComponent, OrderSearchComponent, OrderDetailsComponent, OrderPage1Component, OrdersComponent, OrderHomeComponent]
})
export class OrdersModule { }
