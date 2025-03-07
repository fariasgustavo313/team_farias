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

  contenido = [

    { src: "/img/img1.jpeg", alt: "imagen de kickboxing", tipo: "imagen" },
    { src: "img/img2.jpeg", alt: "imagen de kickboxing", tipo: "imagen" },
    { src: "img/img3.jpeg", alt: "imagen de kickboxing", tipo: "imagen" },
    { src: "img/img4.jpeg", alt: "imagen de kickboxing", tipo: "imagen" },
    { src: "img/img5.jpeg", alt: "imagen de kickboxing", tipo: "imagen" },
    { src: "img/img6.jpeg", alt: "imagen de kickboxing", tipo: "imagen" },
    { src: "img/img7.jpeg", alt: "imagen de kickboxing", tipo: "imagen" },
    { src: "img/img8.jpeg", alt: "imagen de kickboxing", tipo: "imagen" },
    { src: "video/video1.mp4", alt: "video de kickboxing", tipo: "video" },
    { src: "video/video2.mp4", alt: "video de kickboxing", tipo: "video" },
    { src: "video/video3.mp4", alt: "video de kickboxing", tipo: "video" },
    { src: "video/video4.mp4", alt: "video de kickboxing", tipo: "video" },
    { src: "video/video5.mp4", alt: "video de kickboxing", tipo: "video" },
    { src: "video/video6.mp4", alt: "video de kickboxing", tipo: "video" },
    { src: "video/video7.mp4", alt: "video de kickboxing", tipo: "video" },
    { src: "video/video8.mp4", alt: "video de kickboxing", tipo: "video" },
    { src: "video/video9.mp4", alt: "video de kickboxing", tipo: "video" },
    { src: "video/video10.mp4", alt: "video de kickboxing", tipo: "video" },
  ]

}
