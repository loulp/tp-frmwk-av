package framework.tp.backtp.service;

import framework.tp.backtp.model.Pokemon;
import framework.tp.backtp.repository.Entity.PokemonEntity;
import framework.tp.backtp.repository.PokemonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class PokemonService {

    @Autowired
    private PokemonRepository pokemonRepository;

    public void savePokemon(Pokemon pokemon) {

        PokemonEntity pokemonEntity = modelToEntity(pokemon);

        pokemonRepository.save(pokemonEntity);
    };

    public ArrayList<Pokemon> getPokemon() {
        ArrayList<Pokemon> pokemonList = new ArrayList<Pokemon>();
        Iterable<PokemonEntity> entityList = pokemonRepository.findAll();

        entityList.forEach(el  -> {
            pokemonList.add(entityToModel(el));
        });

        return pokemonList;
    };

    private Pokemon entityToModel(PokemonEntity entity) {
        Pokemon pokemon = new Pokemon();
        pokemon.setName(entity.getName());
        pokemon.setImg(entity.getImg());
        pokemon.setAbilities(entity.getAbilities());
        pokemon.setTypes(entity.getTypes());
        pokemon.setUrl(entity.getUrl());

        return pokemon;
    }

    private PokemonEntity modelToEntity(Pokemon model) {
        PokemonEntity pokemonEntity = new PokemonEntity();
        pokemonEntity.setName(model.getName());
        pokemonEntity.setImg(model.getImg());
        pokemonEntity.setAbilities(model.getAbilities());
        pokemonEntity.setTypes(model.getTypes());
        pokemonEntity.setUrl(model.getUrl());

        return pokemonEntity;
    }
}
