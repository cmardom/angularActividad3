import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {InterfaceProductos} from "../../interface.productos";
import {ProductosServices} from "../../services/productos.services";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})


export class FormularioComponent {

  datosProducto: InterfaceProductos= {nombre:'', precio:0, categoria:''};

  constructor(private productosService: ProductosServices){

  }


  onSubmit(f:NgForm){
    //crearServicio(this.datosProducto);
    this.productosService.crear(this.datosProducto);
  }






  /*  //ONE WAY BINDING > property
  empresa:string = "Hola";
  //tutorial ONE WAY BINDING > event
  cambiaEmpresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
    //hace que aparezca automaticamente lo que se escriba en el input
  }*/
}
