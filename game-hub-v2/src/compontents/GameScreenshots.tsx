import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameID: number;
}

const GameScreenshots = ({ gameID }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameID);
  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
