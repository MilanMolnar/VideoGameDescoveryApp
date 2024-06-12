import { Grid, GridItem, Show, Flex, Box } from "@chakra-ui/react";
import NavBar from "./compontents/NavBar";
import GameGrid from "./compontents/GameGrid";
import GenreList from "./compontents/GenreList";
import PlatformSelector from "./compontents/PlatformSelector";
import SortSelector from "./compontents/SortSelector";
import GameHeading from "./compontents/GameHeading";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //w:1024<
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
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
}

export default App;
