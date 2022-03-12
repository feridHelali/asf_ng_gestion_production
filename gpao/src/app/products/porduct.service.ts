import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PorductService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any>{
     return this.http.get(`${environment.API_URI}/products`) as Observable<any>
  }
}
