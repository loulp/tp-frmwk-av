import { Component, OnInit } from "@angular/core";
import { Pokemon } from "src/models/pokemon.model";
import { PokemonService } from "src/services/pokemon.service";

@Component({
  selector: "app-poke-view",
  templateUrl: "./poke-view.component.html",
  styleUrls: ["./poke-view.component.scss"],
})
export class PokeViewComponent implements OnInit {
  private pokemonList = [];
  private favPokemonList: Array<Pokemon> = [];
  private myPokemonList: Array<Pokemon> = [];
  search: string;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getAllPokemon();
    this.getMyPokemon();
  }

  private getAllPokemon() {
    this.pokemonService.getAllPokemon().subscribe(
      (res) => {
        res.results.forEach((element: any) => {
          this.pokemonList.push(element);
        });
      },
      (err) => {
        console.log("Poke view error: ", err);
      }
    );
  }

  private getMyPokemon() {
    this.myPokemonList = [];
    this.pokemonService.getMyPokemon().subscribe(
      (res) => {
        res.forEach((element) => {
          element.abilities = JSON.parse(element.abilities);
          element.types = JSON.parse(element.types);

          this.myPokemonList.push(element);
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  savePokemon(pokemon: Pokemon) {
    this.favPokemonList.push(pokemon);

    if (this.pokemonList.length > 1) {
      this.pokemonList.splice(
        this.pokemonList.findIndex((el) => el.name === pokemon.name),
        1
      );
    } else {
      this.getAllPokemon();
      this.pokemonList.splice(0, 1);
    }
  }

  searchPokemon(name) {
    if (name.target.value === "") {
      this.getAllPokemon();
    }

    this.pokemonService
      .getOnePokemon(`https://pokeapi.co/api/v2/pokemon/${name.target.value}`)
      .subscribe(
        (res) => {
          const url = `https://pokeapi.co/api/v2/pokemon/${name.target.value}`;
          this.pokemonList = [{ name: "", url: url }];
        },
        (err) => {
          console.log("no result");
        }
      );
  }

  saveFavPokemon() {
    this.pokemonService.savePokemon(this.favPokemonList).subscribe(
      (res) => {
        this.getMyPokemon();
        this.favPokemonList = [];
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
