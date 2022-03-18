import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductformComponent } from './productform/productform.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material/material.module';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    ProductformComponent,
    ProductlistComponent
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
