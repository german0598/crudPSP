import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    constructor( private http: HttpClient ) { }

    cargarListado() {
      this.http.get('');
    }

    guardarProducto( producto: any, id = null ) {
      return this.http.get('');
    }

    eliminarProducto( idProducto: any ) {
      return this.http.delete('');
    }

}
