import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../compontents/GenreList";
import GameGrid from "../compontents/GameGrid";
import GameHeading from "../compontents/GameHeading";
import PlatformSelector from "../compontents/PlatformSelector";
import SortSelector from "../compontents/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: `"aside main"`, //w:1024<
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={"9px"}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector></PlatformSelector>
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
