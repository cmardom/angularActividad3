import {NgModule} from "@angular/core";
import {FormularioUsuariosComponent} from "./formularioUsuarios/formularioUsuarios.component";
import {ListadoUsuariosComponent} from "./listadoUsuarios/listadoUsuarios.component";
import {InterfaceUsuarios} from "../interface.usuarios";

export {InterfaceUsuarios  };


@NgModule({
    declarations: [],
    imports: [
        ListadoUsuariosComponent,
        FormularioUsuariosComponent
    ],
    exports: [
        ListadoUsuariosComponent,
        FormularioUsuariosComponent]
})
export class UsuariosModule { }