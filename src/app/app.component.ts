import { Component } from '@angular/core';
import { Pokemon, PokemonGender } from './models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokedex';
  currentPokemonName = '';
  pokemons: Pokemon[] = [];

  addPokemon() {
    this.pokemons.push({
      name: this.currentPokemonName,
      gender: this.getRandomGender(),
    });
  }

  deletePokemon(index: number) {
    this.pokemons.splice(index, 1);
  }

  getRandomGender(): PokemonGender {
    const rand = Math.random();
    if (rand < 0.5) return 'male';
    return 'female';
  }
}
