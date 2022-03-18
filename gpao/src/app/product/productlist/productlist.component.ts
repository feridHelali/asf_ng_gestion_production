import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { ProductService } from '../product.service';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  displayedColumns: string[] = ['label', 'color', 'stock', 'actions'];
  products?:any
  constructor(
    private productService:ProductService,
    private router:Router){
  }
  addProduct(){
    this.router.navigate(['/addproduct']);
  }
  ngOnInit(){
      this.productService.getAllProducts().subscribe(data=>{
        this.products=data.payload
      })
  }


}
