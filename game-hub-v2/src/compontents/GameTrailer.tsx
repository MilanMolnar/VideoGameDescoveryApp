import useTrailers from "../hooks/useTrailers";
import { Spinner } from "@chakra-ui/react";

interface Props {
  gameID: number;
}

const GameTrailer = ({ gameID }: Props) => {
  const { data, error, isLoading } = useTrailers(gameID);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const first_trailerobj = data?.results[0];

  if (!first_trailerobj) return null;

  return (
    <video
      src={first_trailerobj.data[480]}
      poster={first_trailerobj.preview}
      controls
    />
  );
};

export default GameTrailer;
