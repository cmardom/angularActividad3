import { Component } from '@angular/core';
import {ListadoUsuariosComponent} from "../listadoUsuarios/listadoUsuarios.component";
import {FormularioUsuariosComponent} from "../formularioUsuarios/formularioUsuarios.component";

@Component({
  selector: 'app-mainUsuarios',
  standalone: true,
  imports: [
    ListadoUsuariosComponent,
    FormularioUsuariosComponent,
  ],
  templateUrl: './mainUsuarios.component.html',
  styleUrl: './mainUsuarios.component.css'
})
export class MainUsuariosComponent {

}
