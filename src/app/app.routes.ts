import { Routes } from '@angular/router';
import { ProductoComponent } from './producto/ui/producto.component';
import { CarritoComponent } from './carrito/ui/carrito.component';

export const routes: Routes = [
    {path: '', component: ProductoComponent},
    {path: 'carrito', component: CarritoComponent}
];
