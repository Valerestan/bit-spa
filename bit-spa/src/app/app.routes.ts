import { Routes } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './component/home/home.component';
import { FoundationsComponent } from './component/foundations/foundations.component';
import { ContactoComponent  } from './component/contacto/contacto.component';


export const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'fundamentos', component: FoundationsComponent },
  { path: 'contacto', component: ContactoComponent },
];
