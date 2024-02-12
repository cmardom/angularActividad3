import { Component } from '@angular/core';
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {InterfaceUsuarios} from "../../interface.usuarios";
import {UsuariosServices} from "../../services/usuarios.services";
import {FormsModule, NgForm} from "@angular/forms";
import {InterfaceProductos} from "../../interface.productos";

@Component({
  selector: 'app-formularioUsuarios',
  standalone: true,
    imports: [
        NgForOf,
        NgIf,
        FormsModule,
        JsonPipe
    ],
  templateUrl: './formularioUsuarios.component.html',
  styleUrl: './formularioUsuarios.component.css'
})
export class FormularioUsuariosComponent {
    usuarios:InterfaceUsuarios[];
    datosUsuario: InterfaceUsuarios= {nombre:'', edad:0, profesion:''};

    eliminado: InterfaceUsuarios|null = null;
    encontrado:boolean= true;

    constructor(private usuariosServicio:UsuariosServices) {
        this.usuarios = usuariosServicio.getUsuarios();
        this.usuariosServicio.usuariosChanged.subscribe(() => this.usuarios = this.usuariosServicio.getUsuarios());


    }



    onSubmit(f:NgForm){
        //crearServicio(this.datosProducto);
        this.usuariosServicio.crear(this.datosUsuario);


    }
}
