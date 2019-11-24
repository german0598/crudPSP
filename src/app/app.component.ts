import { Component, ViewChild } from '@angular/core';
import { ProductoCreateComponent } from './components/producto-create/producto-create.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('formCreate', { static: false }) formCreate: ProductoCreateComponent;
  @ViewChild('listProductos', { static: false }) listProductos: ProductoListComponent;

  public listaProductos: any [] = [];

  productoEditar: any;
  idProducto: any;
  title = 'Productos';

  constructor() {
    console.log('constructor');
  }

  actualizarLista( nuevaLista: any ) {
    this.listProductos.dataSource.data = nuevaLista;
  }

  editar(elemento: any) {
    this.productoEditar = elemento;
    this.idProducto = elemento._id;

    this.formCreate.formProductos.patchValue({
      precio: elemento.precio,
      fecha: new Date(elemento.fechaProducto),
      nombre: elemento.nombre,
      categoria: elemento.categoria,
      disponible: elemento.disponible,
    });

    // this.form
  }

}
