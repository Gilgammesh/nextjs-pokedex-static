import { GetStaticProps, NextPage } from 'next';

import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { PokemonList } from '@/components/pokemon';

interface IHomePageProps {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<IHomePageProps> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokemons">
      <PokemonList pokemons={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const nroPokemons = 151;
  const result = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=${nroPokemons}`);
  const pokemons: SmallPokemon[] = result.data.results.map(pokemon => {
    const urlParts = pokemon.url.split('/');
    const id = +urlParts[urlParts.length - 2];
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    return {
      id,
      name: pokemon.name,
      url: pokemon.url,
      img
    };
  });

  return {
    props: {
      pokemons
    }
  };
};

export default HomePage;
