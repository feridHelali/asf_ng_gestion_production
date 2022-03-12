import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomComponent } from './hom/hom.component';
import { AboutusComponent } from './layouts/aboutus/aboutus.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { ProductListComponent } from './products/product-list/product-list.component';

const routes: Routes = [
  {path:'',component:HomComponent},
  {path:'product',component:ProductListComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutusComponent},
  {path:'**',redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
