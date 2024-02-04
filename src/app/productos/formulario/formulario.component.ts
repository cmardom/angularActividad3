import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  //ONE WAY BINDING > property
  empresa:string = "Hola";
  anadirProducto(nombreProducto: string, cantidadProducto: string) {

  }

  //tutorial ONE WAY BINDING > event
  cambiaEmpresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
    //hace que aparezca automaticamente lo que se escriba en el input
  }
}
