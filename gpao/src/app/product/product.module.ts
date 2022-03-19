import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductformComponent } from './productform/productform.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material/material.module';
import { MatTableModule } from '@angular/material/table';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    ProductformComponent,
    ProductlistComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatTableModule
  ],
  exports:[ 
    ProductformComponent,
    ProductlistComponent
  ]
})
export class ProductModule { }
