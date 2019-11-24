import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
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
      this.productoService.cargarListado().subscribe( (res) => {
        this.dataSource.data = res;
      });
      this.dataSource.paginator = this.paginator;
    }

    public editar( elemento: any ) {
      this.productoEditar.emit(elemento);
    }

    public eliminar( elemento: any ) {
      this.productoService.eliminarProducto( elemento._id ).subscribe( (res) => {
        this.dataSource.data = res;
      });
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

