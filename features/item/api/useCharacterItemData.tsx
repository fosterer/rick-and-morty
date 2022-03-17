import { Character } from "@/types/typesGraphApi";
import { gql, useQuery } from "@apollo/client";

type CharacterResult = { character: Character };

const useCharacterItemDataQuery = gql`
  query useCharacterItemDataQuery($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        id
        name
        type
      }
      location {
        id
        name
        type
      }
      image
      episode {
        id
        name
        air_date
        episode
      }
      created
    }
  }
`;

export const useCharacterItemData = (id: string) => {
  const { data, loading, error } = useQuery<CharacterResult>(
    useCharacterItemDataQuery,
    {
      variables: { id: id },
      errorPolicy: "ignore",
    }
  );

  return { data, loading, error };
};
