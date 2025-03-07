import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-clases',
  imports: [
    CommonModule
  ],
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.css'
})
export class ClasesComponent {

  clases = [
    {
      titulo: "Clase de Iniciacion",
      descripcion: "Aprende las bases del kickboxing en un entorno relajado y seguro."
    },
    {
      titulo: "Entrenamiento Avanzado",
      descripcion: "Perfecciona tus habilidades y aumenta tu resistencia con entrenamientos intensos."
    }
  ];

  horarios = [
    { dia: 'Lunes', horario: '21:00 PM - 22:30 PM', tipoClase: 'Kickboxing', instructor: 'Martin Farias' },
    { dia: 'Martes', horario: '-', tipoClase: '-', instructor: '-' },
    { dia: 'Miércoles', horario: '21:00 PM - 22:30 PM', tipoClase: 'Kickboxing', instructor: 'Martin Farias' },
    { dia: 'Jueves', horario: '-', tipoClase: '-', instructor: '-' },
    { dia: 'Viernes', horario: '21:00 PM - 22:30 PM', tipoClase: 'Kickboxing', instructor: 'Martin Farias' }
  ];

}
