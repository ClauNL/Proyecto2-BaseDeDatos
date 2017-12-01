import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: {
    id: 5
  };

  constructor() { }

  ngOnInit() {
  }

}

export class Listing {
  key?:string;
  tittle?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}
