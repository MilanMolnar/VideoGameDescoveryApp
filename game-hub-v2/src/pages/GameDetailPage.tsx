import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpendableText from "../compontents/ExpendableText";
import GameAttributes from "../compontents/GameAttributes";
import GameTrailer from "../compontents/GameTrailer";
import GameScreenshots from "../compontents/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpendableText>{game.description_raw}</ExpendableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameID={game.id} />
        <GameScreenshots gameID={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
