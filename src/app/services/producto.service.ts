import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

export class Producto {
  nombre: string;
  userId: string
}


@Injectable()
export class ProductoService {

  productos: FirebaseListObservable<Producto[]> = null;
  userId: string;
  calculadoras: FirebaseListObservable<Producto[]> = null;
  marcadores: FirebaseListObservable<Producto[]> = null;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { 

    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid;
      console.log(this.userId)
    })
  }

  getProductosUser(): FirebaseListObservable<Producto[]> {
    if (!this.userId) return;
    this.productos = this.db.list(`productos/${this.userId}`);
    return this.productos
  }

  getListaProductos(): FirebaseListObservable<Producto[]> {
    if (!this.userId) return;
    this.productos = this.db.list(`productos`);
    return this.productos
  }

  getListaEspecifica(tipoProducto: string): FirebaseListObservable<Producto[]> {
    if (!this.userId) return;

    else if(tipoProducto=="calculadoras") {
      this.calculadoras = this.db.list(`calculadoras`);
      return this.calculadoras
    }
    else if(tipoProducto=="marcadores") {
      this.marcadores = this.db.list(`marcadores`);
      return this.marcadores
    }



    
  }

}
