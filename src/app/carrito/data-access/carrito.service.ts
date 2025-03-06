import { Injectable } from "@angular/core";
import { Producto } from "../../producto/interfaces/producto";

@Injectable ({
    providedIn: "root"
})

export class CarritoService {
    private carrito:Producto[] = [];
    agregarProducto(producto:Producto){
        this.carrito.push(producto);
    }

    obtenerCarrito() : Producto[]{
        return this.carrito;
    }

    generarXML() {
        let xml = `<?xml version="1.0" encoding="UTF-8"?>
        <recibo>\n`;
        
        this.carrito.forEach((producto, index) => {
            xml += `<producto id="${producto.id}">
            <nombre>${producto.nombre}</nombre>
            <precio>${producto.precio}</precio>
            </producto>\n`;
        });
        
        xml += "</recibo>";
        
        const blob = new Blob([xml], {type: 'application/xml'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.download = 'recibo.xml';
        a.href = url;
        
        // Append to document, click, then clean up
        document.body.appendChild(a);
        a.click();
        
        // Clean up
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }

    eliminarProducto(index: number) {
        this.carrito.splice(index, 1);
    }
}