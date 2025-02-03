import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  imports: [
    CommonModule
  ],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  imagenes = [

    { src: "img-kick1.jpg", alt: "imagen de kickboxing" },
    { src: "img-kick2.jpg", alt: "imagen de kickboxing" },
    { src: "img-kick3.jpg", alt: "imagen de kickboxing" },
    { src: "img-kick4.jpg", alt: "imagen de kickboxing" },
    { src: "img-kick5.jpg", alt: "imagen de kickboxing" },
    { src: "img-kick6.jpg", alt: "imagen de kickboxing" },
  ]

}
