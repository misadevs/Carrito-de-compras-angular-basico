import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos:Producto[] = [
    new Producto(1, "laptop", 1200, "asserts/laptop.jpg"),
    new Producto(2, "router", 3000, "asserts/router.jpg"),
    new Producto(3, "pc", 10000, "asserts/pc.jpg"),
  ];
  obtenerProducto():Producto[]{
    return this.productos;
  }
  constructor() { }
}