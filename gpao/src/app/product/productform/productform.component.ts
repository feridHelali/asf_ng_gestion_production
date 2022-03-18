import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent {
  productForm: FormGroup=this.fb.group({
    label: ['', Validators.required],
    color: ['', Validators.required],
    stock: [0]
  })
  constructor(private fb: FormBuilder) {
    
  }

 saveProduct(){
   console.log('Save Product')
   console.log(this.productForm.value)
 }
}
