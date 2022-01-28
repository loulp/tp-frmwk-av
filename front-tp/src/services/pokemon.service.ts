import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pokemon } from "src/models/pokemon.model";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getAllPokemon(): Observable<any> {
    return this.http.get("https://pokeapi.co/api/v2/pokemon");
  }

  getOnePokemon(url: string): Observable<any> {
    return this.http.get(url);
  }

  savePokemon(pokemonList: Array<Pokemon>): Observable<any> {
    pokemonList.forEach((el) => {
      el.abilities = JSON.stringify(el.abilities);
      el.types = JSON.stringify(el.types);
    });
    return this.http.post("http://localhost:8081/pokemon/save", pokemonList);
  }

  getMyPokemon(): Observable<any> {
    return this.http.get("http://localhost:8081/pokemon/get")
  }
}
