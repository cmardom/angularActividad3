import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import {MainComponent} from "./main/main.component";
import {FormularioComponent} from "./formulario/formulario.component";
import { InterfaceProductos } from '../interface.productos';
export { InterfaceProductos };

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListadoComponent,
    MainComponent,
    FormularioComponent
  ],
  exports: [
    ListadoComponent,
      MainComponent, FormularioComponent]
})
export class ProductosModule { }

