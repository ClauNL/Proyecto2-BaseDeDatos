import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from "./services/auth.service";
import { FirebaseService } from "./services/firebase.service";
import {  ProductoService } from "./services/producto.service";
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { MarcadorComponent } from './components/marcador/marcador.component';
import { LaptopComponent } from './components/laptop/laptop.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/user-profile', pathMatch: 'full' },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'marcador', component: MarcadorComponent },
  { path: 'laptop', component: LaptopComponent },
  
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductosComponent,
    ProductoComponent,
    UserLoginComponent,
    UserProfileComponent,
    CalculadoraComponent,
    MarcadorComponent,
    LaptopComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot(appRoutes),
    AngularFireAuthModule,
    AngularFireDatabaseModule
    
  ],
  providers: [
    AuthService,
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
