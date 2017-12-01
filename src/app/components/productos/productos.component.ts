import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Producto, ProductoService } from "../../services/producto.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[];
  materiales: Producto[];


  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos(): void {
    this.productoService.getListaProductos().subscribe(productos =>{
      this.productos = productos;
      console.log(productos);
    })
  }

  getListaEspecifica(tipoProducto: string): void {
    this.productoService.getListaEspecifica(tipoProducto).subscribe(materiales =>{
      this.materiales = materiales;
      console.log(materiales);
    })

  }

  getMaterial(tipoProducto: string): void {
    this.productoService.getListaEspecifica(tipoProducto).subscribe(materiales =>{
      this.materiales = materiales;
      console.log(materiales);
    })

    if(tipoProducto=="calculadoras") {
      this.router.navigate(['/calculadora']);
    }
    else if(tipoProducto=="marcadores") {
      this.router.navigate(['/marcador']);
    }

  }

}

