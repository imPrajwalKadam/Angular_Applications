import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlankComponent}from './blank/blank.component';

const routes: Routes = [

  {path:'',component:BlankComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }