import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomersNameComponent } from './customers-name/customers-name.component';
import { CustomersAddressComponent } from './customers-address/customers-address.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomersNameComponent,
    CustomersAddressComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
