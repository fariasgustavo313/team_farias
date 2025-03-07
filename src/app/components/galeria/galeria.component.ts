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

    { src: "img1.jpeg", alt: "imagen de kickboxing" },
    { src: "img2.jpeg", alt: "imagen de kickboxing" },
    { src: "img3.jpeg", alt: "imagen de kickboxing" },
    { src: "img4.jpeg", alt: "imagen de kickboxing" },
    { src: "img5.jpeg", alt: "imagen de kickboxing" },
  ]

}
