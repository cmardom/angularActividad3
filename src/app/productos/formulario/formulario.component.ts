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


  anadirProducto(nombreProducto: string, cantidadProducto: string) {


  }

/*  //ONE WAY BINDING > property
  empresa:string = "Hola";
  //tutorial ONE WAY BINDING > event
  cambiaEmpresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
    //hace que aparezca automaticamente lo que se escriba en el input
  }*/
  protected readonly onsubmit = onsubmit;
}
