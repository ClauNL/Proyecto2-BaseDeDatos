import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Producto, ProductoService } from "../../services/producto.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class Calculadora {
  marca?: string;
  precio?: string;
}



export class CalculadoraComponent implements OnInit {

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit() {
  }

  getCalculadoras(): void {
    this.productoService.getListaProductos().subscribe(productos =>{
      this.productos = productos;
      console.log(productos);
    })
  }

}
