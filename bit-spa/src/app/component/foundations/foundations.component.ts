import { Component } from '@angular/core';

@Component({
  selector: 'app-foundations',
  imports: [],
  templateUrl: './foundations.component.html',
  styleUrl: './foundations.component.css',
})
export class FoundationsComponent {
  nombreUsuario: string = 'pepita';
  estalogueado: boolean = true;
  devs: string[] = ['Juan', 'Pedro', 'Maria'];

  ooss = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' },
  ];

  evitarenvio: boolean = false;
  urlimg: string =
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fethic.es%2F2023%2F03%2Fel-enigma-de-la-imagen%2F&psig=AOvVaw0yhqMrIGmzQ_hmE1jhDH__&ust=1739585836573000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLjz67CMwosDFQAAAAAdAAAAABAE';

  manejarclick() {
    console.log('hiciste click');
  }

  colorfondo: string = 'cf-rojo';
  manejarmouseover(){
    this.colorfondo = "cf-amarillo"
  }
}

