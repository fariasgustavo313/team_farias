import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  navs: { name: string, link: string }[] = [
    { name: "Inicio", link: "/" },
    { name: "Clases", link: "/clases" },
    { name: "Galeria", link: "/galeria" },
    { name: "Contacto", link: "/contacto" },
  ];
}
