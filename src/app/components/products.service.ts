import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    private headers: HttpHeaders;
    private api = 'http://localhost:3001/api/productos';

    constructor( private http: HttpClient ) {
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
    }

    public cargarListado(): Observable<any> {
      return this.http.get(this.api);
    }

    public cargarListas(): Observable<any> {
      return this.http.get(`${this.api}/lists`);
    }

    public guardarProducto( producto: any, id = null ): Observable<any> {
      console.log('Prod: ', producto, ' id: ', id);

      if ( id == null ) {
        console.log('vamos a hacer la petición');
        return this.http.post(`${this.api}/save`, producto, { headers: this.headers } );
      } else {
        return this.http.put(`${this.api}/update/${id}`, producto, { headers: this.headers } );
      }
    }

    public eliminarProducto(idProducto: any): Observable<any> {
      return this.http.delete(`${this.api}/delete/${idProducto}`);
    }

}
