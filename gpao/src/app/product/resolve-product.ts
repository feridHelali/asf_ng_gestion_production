import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ProductService } from "./product.service";


@Injectable({ providedIn: 'root' })
export class ResolveProduct implements Resolve<any>{

    constructor(private productService:ProductService){

    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<any> {
        return this.productService.getProductById(route.paramMap.get('id'));
      }
}
