import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { path: '',   redirectTo: '/all_Products', pathMatch: 'full'},
  { path: 'all_Products',  component: AllProductsComponent},
  { path: 'basket',  component: BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
