import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import Image from 'next/image';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { FullPokemon } from '@/interfaces';

interface IPokemonPageProps {
  pokemon: FullPokemon;
}

const PokemonPage: NextPage<IPokemonPageProps> = ({ pokemon }) => {
  return (
    <Layout title={`Pokemon ${pokemon.name}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable>
            <Card.Body css={{ p: 1 }}>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/assets/no-image.png'}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1>{pokemon.name}</Text>
              <Button color="gradient" ghost>
                Guardar en Favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" justify="space-between" gap={0}>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const nroPokemons = 151;
  const paths = [
    ...Array(nroPokemons)
      .fill('')
      .map((_, index) => ({
        params: { id: `${index + 1}` }
      }))
  ];

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { id } = ctx.params as { id: string };

  const result = await pokeApi.get<FullPokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: result.data
    }
  };
};

export default PokemonPage;
