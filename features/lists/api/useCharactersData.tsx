import { Character, Info } from "@/types/typesGraphApi";
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

interface CharacterDataQuery {
  characters: {
    info: Info;
    results: Pick<Character, "id" | "name" | "status" | "species" | "image">[];
  };
}

export const useCharactersData = (page: number) => {
  const { data, loading, error } = useQuery<CharacterDataQuery>(
    useCharactersDataQuery,
    {
      variables: { page: page },
      errorPolicy: "ignore",
    }
  );

  return { data, loading, error };
};
