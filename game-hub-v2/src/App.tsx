import { Grid, GridItem, Show, Flex, Box } from "@chakra-ui/react";
import NavBar from "./compontents/NavBar";
import GameGrid from "./compontents/GameGrid";
import GenreList from "./compontents/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./compontents/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./compontents/SortSelector";
import GameHeading from "./compontents/GameHeading";

export interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreID={gameQuery.genreID}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreID: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={"9px"}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatformID={gameQuery.platformID}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformID: platform.id })
                }
              ></PlatformSelector>
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            ></SortSelector>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
