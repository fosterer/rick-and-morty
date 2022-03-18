import { Episode } from "@/types/typesGraphApi";
import { gql, useQuery } from "@apollo/client";

type EpisodeResult = { episode: Episode };

const useEpisodeItemDataQuery = gql`
  query useEpisodeItemDataQuery($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        status
        species
        image
      }
      created
    }
  }
`;

export const useEpisodeItemData = (id: string) => {
  const { data, loading, error } = useQuery<EpisodeResult>(
    useEpisodeItemDataQuery,
    {
      variables: { id: id },
      errorPolicy: "ignore",
    }
  );

  return { data, loading, error };
};
