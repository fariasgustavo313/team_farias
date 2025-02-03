import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ClasesComponent } from './components/clases/clases.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    { path: "", component: InicioComponent },
    { path: "clases", component: ClasesComponent },
    { path: "galeria", component: GaleriaComponent },
    { path: "contacto", component: ContactoComponent }
];
