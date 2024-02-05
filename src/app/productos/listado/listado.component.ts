import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { InterfaceProductos } from '../productos.module';
import {ProductosServices} from "../../services/productos.services";

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  productos:InterfaceProductos[];

  eliminado: InterfaceProductos|null = null;
  //BINDING
  //se usa como [disabled]=eliminado en el template.

  encontrado: boolean = true;

  //los servicios se declaran e inicializan en el constructor
  constructor(private productosServicio:ProductosServices) {
    //cargar los productos con el servicio
    this.productos = productosServicio.productos;
  }

  getProductos(){
    return this.productos;
  }

  eliminar(producto:string):void{
    //se usa el servicio de productos
    this.eliminado = this.productosServicio.eliminar(producto);

    this.encontrado = (this.eliminado != null); //cambia el estado si es producto o null


    setTimeout(() => {
      this.eliminado = null;
      this.encontrado = true;
    }, (1000));
  }


/*  eliminar(producto:string):void {
    let pos=this.productos.findIndex((item)=> item.nombre.toLowerCase() == producto.toLowerCase() );
    // console.log("Eliminando " + producto + " de posición " + pos)
    if(pos>=0) {
      this.eliminado = this.productos[pos];
      this.productos.splice(pos, 1);
      this.encontrado = true;
    } else{
      this.encontrado = false;
    }
    setTimeout(() => {
      this.eliminado = null;
    }, (1000));
  }*/
}
