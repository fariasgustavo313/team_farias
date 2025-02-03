import { Component } from '@angular/core';
import EmailJS from 'emailjs-com';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [
    FormsModule
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  nombre: string = "";
  correo: string = "";
  mensaje: string = "";

  constructor(){}

  enviarFormulario() {
    const templateParams = {
      nombre: this.nombre,
      correo: this.correo,
      mensaje: this.mensaje
    };

    EmailJS.send("service_5r6h9lq", "template_jstu0df", templateParams, "4HYSAai-AsnyyUxoZ")
      .then((response) => {
        console.log("Correo enviado:", response);
        alert("Mensaje enviado con exito!");

        this.nombre = "";
        this.correo = "";
        this.mensaje = "";
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
        alert("Ocurrio un error al enviar el mensake. Intente nuevamente.");
      });
  }

}
