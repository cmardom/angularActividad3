import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductosModule } from './productos/productos.module';
import {MainComponent} from "./productos/main/main.component";
import {LogoComponent} from "./cabecera/logo/logo.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductosModule, MainComponent, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { //clase
  title = '03-productos'; //propiedad que se puede usar en html
  // saludo: string = "hola";   {{ saludo }}
}
