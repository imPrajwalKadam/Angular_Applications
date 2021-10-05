import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersAddressComponent } from './customers-address/customers-address.component';
import { CustomersNameComponent } from './customers-name/customers-name.component';

const routes: Routes = [
  { path: '',component : CustomersComponent },
  {path:'customers-address',component : CustomersAddressComponent},
  {path:'customers-name',component : CustomersNameComponent},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
