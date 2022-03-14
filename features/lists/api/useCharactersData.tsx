import { CharactersDataQuery } from "../types/types";
import { gql, useQuery } from "@apollo/client";

const useCharactersDataQuery = gql`
  query useCharactersDataQuery($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        image
      }
    }
  }
`;

export const useCharactersData = (page: number) => {
  const { data, loading, error } = useQuery<CharactersDataQuery>(
    useCharactersDataQuery,
    {
      variables: { page: page },
      errorPolicy: "ignore",
    }
  );

  return { data, loading, error };
};
