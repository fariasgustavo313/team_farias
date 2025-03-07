import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  mensaje: string = "Estoy%20interesado%20en%20las%20clases...";
  contacto: number = 1122768810;
  instagram: string = "team___farias";
}
