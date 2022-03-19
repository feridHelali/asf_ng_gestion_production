import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './layouts/aboutus/aboutus.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { ProductformComponent } from './product/productform/productform.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ResolveProduct } from './product/resolve-product';
import { UpdateProductComponent } from './product/update-product/update-product.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'product',component:ProductlistComponent},
  {path:'addproduct',component:ProductformComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutusComponent},
  {
    path:'updateproduct/:id',
    component:UpdateProductComponent,
  resolve:{
    product:ResolveProduct
  }
},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
