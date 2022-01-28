package framework.tp.backtp.controller;

import framework.tp.backtp.model.Pokemon;
import framework.tp.backtp.service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PokemonController {

    @Autowired
    private PokemonService pokemonService;

    @PostMapping("/pokemon/save")
    public void savePokemon(@RequestBody ArrayList<Pokemon> data) {
        data.forEach(pokemon -> {
            pokemonService.savePokemon(pokemon);
        });
    }

    @GetMapping("/pokemon/get")
    public ArrayList<Pokemon> getPokemon() {
        return pokemonService.getPokemon();
    }
}
