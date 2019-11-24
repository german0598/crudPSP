import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.scss']
})
export class ProductoCreateComponent implements OnInit {

    public formProductos: FormGroup;
    @Input() productoEditar: any;
    @Input() idProducto: any = null;
    @Output() productosNuevos = new EventEmitter<any []>();
    public categorias: [] = [];

    hide = true;

    // categorias: any [] = [
    //   { value: 1, viewValue: 'Bebidas' },
    //   { value: 2, viewValue: 'Ropa Hombre' },
    //   { value: 3, viewValue: 'Ropa Mujer' },
    //   { value: 4, viewValue: 'Tenis hombre' },
    // ];

    constructor( private productoService: ProductsService ) { }

    ngOnInit() {

      this.formProductos = new FormGroup({
        precio: new FormControl(null, Validators.required),
        fecha: new FormControl( true, Validators.required ),
        nombre: new FormControl( null, Validators.required ),
        categoria: new FormControl( null, Validators.required ),
        disponible: new FormControl(true, Validators.required),
      });

      this.productoService.cargarListas().subscribe( (res) => {
        this.categorias = res;
      });

    }

    public guardarProducto() {

      if ( this.formProductos.invalid ) { return; }
      const producto = {
        disponible: this.formProductos.value.disponible,
        precio: this.formProductos.value.precio,
        nombre: this.formProductos.value.nombre,
        categoria: this.formProductos.value.categoria,
        fechaProducto: this.formProductos.value.fecha
      };
      console.log(producto, this.idProducto);
      this.productoService.guardarProducto( producto, this.idProducto ).subscribe( (res) => {
        this.productosNuevos.emit(res);
      });
    }

    public resetForm() {
      this.formProductos.setValue({
        disponible: null,
        precio: null,
        nombre: null,
        categoria: null,
        fecha: null
      });

    // this.formProductos.reset();
    }


}
