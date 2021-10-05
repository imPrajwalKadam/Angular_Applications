import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ProductNameComponent } from './product-name/product-name.component';
import { ProductPriceComponent } from './product-price/product-price.component';


@NgModule({
  declarations: [
    OrdersComponent,
    ProductNameComponent,
    ProductPriceComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
