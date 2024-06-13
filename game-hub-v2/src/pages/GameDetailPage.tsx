import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpendableText from "../compontents/ExpendableText";
import DefinitionItem from "../compontents/DefinitionItem";
import CriticScore from "../compontents/CriticScore";
import GameAttributes from "../compontents/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpendableText>{game.description_raw}</ExpendableText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
