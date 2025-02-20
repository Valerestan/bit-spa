import { Component } from '@angular/core';

@Component({
  selector: 'app-api',
  imports: [],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent {

}


function getcharacteres (done){
  const results = fetch('https://rickandmortyapi.com/api/character');
  results
  .then(response => response.json);
  .then(data => {done (data)})
}

getcharacteres(data => {
  data.results.forEach(personajes => { 
    const article = document.createRange().createContextualFragment(
      /*html*/ `
      <article>
        <div class="imagen-container">
            <img src="${personajes.imagen}" alt="personajes"> </div>
            <h2> ${personajes.name}</h2>
            <span>${personajes.status}</span>

    </article>`
    );
    
    const main  = document.querySelector ('main');
  main.append(article)
  });
})