import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  oldProduct:any;

  productForm: FormGroup=this.fb.group({
    label: ['', Validators.required],
    color: ['', Validators.required],
    stock: [0]
  });
  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private productService:ProductService) {
    this.oldProduct = this.route.snapshot.data;
    this.productForm.patchValue({
      label:this.oldProduct.product.payload.label,
      color:this.oldProduct.product.payload.color,
      stock:this.oldProduct.product.payload.stock
    })
  }

  ngOnInit(): void {
   
   
  
  }

 updateProduct(){
   console.log('Update Product')
   console.log(this.productForm.value);
   this.productService.updateProduct(this.oldProduct.product.payload._id,this.productForm.value).subscribe(console.log)
   this.router.navigate(['/product'])
 }
}
