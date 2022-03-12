import { Component, OnInit } from '@angular/core';
import { PorductService } from '../porduct.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products?:any;

  constructor(private productService:PorductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data=>this.products=data.payload)
  }

}
