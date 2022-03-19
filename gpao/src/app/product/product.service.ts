import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any>{
    return this.http.get(`${environment.API_URI}/products`)
  }

  deleteProduct(id:string):Observable<any>{
    return this.http.delete(`${environment.API_URI}/products/${id}`)
  }

  updateProduct(id:string,newProduct:any):Observable<any>{
    console.log('From ProductService',newProduct)
    return this.http.put(`${environment.API_URI}/products/${id}`,newProduct)
  }

  getProductById(id:any):Observable<any>{
    return this.http.get(`${environment.API_URI}/products/${id}`);
  }
}
