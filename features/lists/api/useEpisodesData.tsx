import { EpisodesDataQuery } from "../types/types";
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

export const useEpisodesData = (page: number) => {
  const { data, loading, error } = useQuery<EpisodesDataQuery>(
    useEpisodesDataQuery,
    {
      variables: { page: page },
      errorPolicy: "ignore",
    }
  );

  return { data, loading, error };
};
