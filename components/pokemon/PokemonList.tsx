import { Grid } from '@nextui-org/react';
import { SmallPokemon } from '@/interfaces';
import PokemonCard from './PokemonCard';

interface IPokemonListProps {
  pokemons: SmallPokemon[];
}

const PokemonList = ({ pokemons }: IPokemonListProps) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid.Container>
  );
};

export default PokemonList;
