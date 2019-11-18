import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.scss']
})
export class ProductoListComponent implements OnInit {

    displayedColumns: string[] = ['nombre', 'precio', 'categoria', 'fecha', 'disponible', 'accion'];
    dataSource = new MatTableDataSource<PeriodicElement>();

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @Output() productoEditar = new EventEmitter<any>();

    constructor(private productoService: ProductsService ) { }

    ngOnInit() {
      this.dataSource.data = ELEMENT_DATA;
      this.dataSource.paginator = this.paginator;
    }

    editar( elemento: any ) {
      this.productoEditar.emit(elemento);
    }

    eliminar( elemento: any ) {
      this.productoService.eliminarProducto( elemento.id );
    }

}

export interface PeriodicElement {
  id: number;
  nombre: string;
  precio: number;
  categoria: object;
  fecha: string;
  disponible: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 121, disponible: 1, precio: 1, nombre: 'Zapatos', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '11/17/2019' },
  {id: 122, disponible: 1,  precio: 2, nombre: 'Helium', categoria: { value: 3, viewValue: 'Ropa mujer' }, fecha: '11/10/2019' },
  {id: 123, disponible: 1,  precio: 3, nombre: 'Lithium', categoria: { value: 2, viewValue: 'Ropa Hombre' }, fecha: '11/18/2019' },
  {id: 124, disponible: 1,  precio: 4, nombre: 'Beryllium', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '11/09/2019' },
  {id: 125, disponible: 1,  precio: 5, nombre: 'Boron', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '12/01/2019' },
  {id: 166, disponible: 1,  precio: 6, nombre: 'Carbon', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '10/17/2019' },
  {id: 176, disponible: 1,  precio: 7, nombre: 'Nitrogen', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '09/17/2019' },
  {id: 128, disponible: 1,  precio: 8, nombre: 'Oxygen', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '01/17/2019' },
  {id: 129, disponible: 1,  precio: 9, nombre: 'Fluorine', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '08/17/2019' },
  {id: 190, disponible: 1,  precio: 10, nombre: 'Neon', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '07/17/2019' },
  {id: 1666, disponible: 1,  precio: 11, nombre: 'Sodium', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '02/15/2019' },
  {id: 1772, disponible: 1,  precio: 12, nombre: 'Magnesium', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '11/18/2019' },
  {id: 18892, disponible: 1,  precio: 13, nombre: 'Aluminum', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '11/19/2019' },
  {id: 1982, disponible: 1,  precio: 14, nombre: 'Silicon', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '11/27/2019' },
  {id: 198762, disponible: 1,  precio: 15, nombre: 'Phosphorus', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '11/30/2019' },
  {id: 185632, disponible: 1,  precio: 16, nombre: 'Sulfur', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '11/02/2019' },
  {id: 13122, disponible: 1,  precio: 17, nombre: 'Chlorine', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '11/09/2019' },
  {id: 31212, disponible: 1,  precio: 18, nombre: 'Argon', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '11/01/2019' },
  {id: 14562, disponible: 1,  precio: 19, nombre: 'Potassium', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '11/01/2019' },
  {id: 16662, disponible: 1,  precio: 20, nombre: 'Calcium', categoria: { value: 1, viewValue: 'Bebidas' }, fecha: '11/09/2019' },
];
