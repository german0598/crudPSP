import { Component, ViewChild } from '@angular/core';
import { ProductoCreateComponent } from './components/producto-create/producto-create.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('formCreate', { static: false }) formCreate: ProductoCreateComponent;

  productoEditar: any;
  idProducto: any;
  title = 'Productos';

  constructor() {
    console.log('constructor');
  }

  editar(elemento: any) {

    this.productoEditar = elemento;
    this.idProducto = elemento.id;

    this.formCreate.formProductos.patchValue({
      precio: elemento.precio,
      fecha: new Date(elemento.fecha),
      nombre: elemento.nombre,
      categoria: elemento.categoria.value,
      disponible: elemento.disponible,
    });
  }

}
