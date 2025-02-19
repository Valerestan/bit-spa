import { Routes } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './component/home/home.component';
import { FoundationsComponent } from './component/foundations/foundations.component';
import { ContactoComponent  } from './component/contacto/contacto.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import {ApiComponent} from './component/api/api.component';
import {PokeapiComponent} from './component/pokeapi/pokeapi.component';

export const routes: Routes = [
  { path: 'api', component: ApiComponent, title: 'Api' },
  { path: 'contacto', component: ContactoComponent, title: 'Contacto' },
  { path: 'inicio', component: HomeComponent, title: 'Inicio' },
  { path: 'tendecias', component: FoundationsComponent, title: 'Tendencias' },
  {path: 'pokeapi', component: PokeapiComponent, title: "Pokeapi"}, 
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, title: 'Error 404' },
];
