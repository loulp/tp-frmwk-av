import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Pokemon } from "src/models/pokemon.model";
import { PokemonService } from "src/services/pokemon.service";

@Component({
  selector: "app-poke-card",
  templateUrl: "./poke-card.component.html",
  styleUrls: ["./poke-card.component.scss"],
})
export class PokeCardComponent implements OnInit {
  pokemon: Pokemon;
  @Input() pokemonUrl: string;
  @Output() savePokemon = new EventEmitter()


  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemonDetail();
  }

  getPokemonDetail() {    
    this.pokemonService.getOnePokemon(this.pokemonUrl).subscribe(
      (res) => {        
        this.pokemon = new Pokemon(
          res.abilities,
          res.types,
          res.name,
          res.sprites.front_default,
          this.pokemonUrl
        );
      },
      (err) => {
        console.log("Poke card error: ", err);
      }
    );
  }
}
