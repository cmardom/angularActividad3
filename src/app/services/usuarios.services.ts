import {EventEmitter, Injectable} from "@angular/core";
import {InterfaceProductos} from "../interface.productos";
import {InterfaceUsuarios} from "../interface.usuarios";

@Injectable({
    providedIn: "root"
})

export class UsuariosServices{
    private usuarios: InterfaceUsuarios[]= [
        {nombre: "Manuel", edad: 56, profesion: "No tiene profesion"},
        {nombre: "Antonio", edad: 28, profesion: "No tiene profesion"}

    ]


    usuariosChanged:EventEmitter<any>;

    constructor() {
        this.usuariosChanged = new EventEmitter<any>();
        //para avisar de cambios: nuevo usuario añadido desde otro componente
    }

    getUsuarios():InterfaceUsuarios[]{
        //para trabajar con copias, porque si no no funciona añadir
        return Array.from(this.usuarios);
    }




    eliminar(usuario:string):InterfaceUsuarios|null {
        let usuarioEliminado:InterfaceUsuarios|null;
        console.log("eliminarServicio");
        let pos=this.usuarios.findIndex((item)=> item.nombre.toLowerCase() == usuario.toLowerCase() );
        console.log(pos);
        console.log(usuario);


        if(pos>=0) {
            usuarioEliminado = this.usuarios[pos];
            this.usuarios.splice(pos, 1);
            this.usuariosChanged.emit();

        } else{
            usuarioEliminado=null;
        }

        return usuarioEliminado;
    }



    crear(datos:InterfaceUsuarios){

        this.usuarios.push({...datos});
        this.usuariosChanged.emit();
    }
}