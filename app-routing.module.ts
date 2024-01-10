import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCartComponent } from './product-card/product-card.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'product-card',component:ProductCartComponent},
  {path:'view-product/:id',component:ProductViewComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
