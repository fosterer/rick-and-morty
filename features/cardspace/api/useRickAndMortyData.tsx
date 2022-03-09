import { gql, useQuery } from "@apollo/client";
import { useIndexStore } from "@/stores/indexStore";
import { RickAndMortyQuery } from "@/features/cardspace/types/types";

const myQuery = gql`
  query myQuery($name: String) {
    characters(filter: { name: $name }) {
      results {
        name
        status
        species
        type
        gender
        origin {
          name
          type
          dimension
        }
        location {
          name
          type
          dimension
        }
        image
      }
    }
    episodes(filter: { name: $name }) {
      results {
        name
        air_date
        episode
      }
    }
    locations(filter: { name: $name }) {
      results {
        name
        type
        dimension
      }
    }
  }
`;

export const useRickAndMortyData = () => {
  const nameParam = useIndexStore((state) => state.queryParamName);
  const { data, loading, error } = useQuery<RickAndMortyQuery>(myQuery, {
    variables: { name: nameParam },
    errorPolicy: "ignore",
  });

  return { data, loading, error };
};
