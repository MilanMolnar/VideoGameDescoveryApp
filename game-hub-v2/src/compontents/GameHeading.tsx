import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreID = useGameQueryStore((s) => s.gameQuery.genreID);
  const genre = useGenre(genreID);

  const platformID = useGameQueryStore((s) => s.gameQuery.platformID);
  const platform = usePlatform(platformID);

  let heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize={"5xl"} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
