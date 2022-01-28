package framework.tp.backtp.repository;

import framework.tp.backtp.model.Pokemon;
import framework.tp.backtp.repository.Entity.PokemonEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PokemonRepository extends CrudRepository<PokemonEntity, Long> {
}
