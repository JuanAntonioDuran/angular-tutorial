import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-img-aleatoria',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './img-aleatoria.component.html',
  styleUrl: './img-aleatoria.component.css'
})
export class ImgAleatoriaComponent {
title= 'imagen Aleatoria'

imagenAleatoria:string=""

nombre=""

muestraImagen(){
 let random:number = Math.trunc((Math.random()*1000)+100)

this.imagenAleatoria= "https://picsum.photos/200/300?random="+random

}


}
