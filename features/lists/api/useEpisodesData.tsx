import { Character, Episode, Info } from "@/types/typesGraphApi";
import { gql, useQuery } from "@apollo/client";

const useEpisodesDataQuery = gql`
  query useEpisodesDataQuery($page: Int) {
    episodes(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

interface EpisodeDataQuery {
  episodes: {
    info: Info;
    results: Pick<Episode, "id" | "name" | "air_date" | "episode">[];
  };
}

export const useEpisodesData = (page: number) => {
  const { data, loading, error } = useQuery<EpisodeDataQuery>(
    useEpisodesDataQuery,
    {
      variables: { page: page },
      errorPolicy: "ignore",
    }
  );

  return { data, loading, error };
};
