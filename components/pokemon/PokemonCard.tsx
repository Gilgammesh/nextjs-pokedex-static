import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '@/interfaces';

interface IPokemonCardProps {
  pokemon: SmallPokemon;
}

const PokemonCard = ({ pokemon }: IPokemonCardProps) => {
  const router = useRouter();

  const handleClickCard = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={handleClickCard} className="shadow-lg shadow-cyan-500/80">
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text>{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
