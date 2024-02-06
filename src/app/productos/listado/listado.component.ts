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
    this.productos = productosServicio.getProductos();
    //recibe evento de otro componente para actualizar lista
    this.productosServicio.productosChanged.subscribe(() => this.productos = productosServicio.getProductos());
    //suscribe tiene callback y acctualiza la lista : argumento de suscribe
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

}
