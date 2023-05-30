import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesBarComponent } from './tables-bar/tables-bar.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'mesas', component: TablesBarComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
