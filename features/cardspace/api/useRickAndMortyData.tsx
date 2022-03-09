import { gql, useQuery } from "@apollo/client";
import { useIndexStore } from "@/stores/indexStore";

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

interface Character {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
}

interface Characters {
  results: Character[];
}

interface Location {
  name: string;
  type: string;
  dimension: string;
}

interface Episode {
  name: string;
  air_date: string;
  episode: string;
}

interface Episodes {
  results: Episode[];
}

interface Locations {
  results: Location[];
}

interface RickAndMortyQuery {
  characters: Characters | null;
  episodes: Episodes | null;
  locations: Locations | null;
}

export const useRickAndMortyData = () => {
  const nameParam = useIndexStore((state) => state.queryParamName);
  const { data, loading, error } = useQuery<RickAndMortyQuery>(myQuery, {
    variables: { name: nameParam },
    errorPolicy: "ignore",
  });

  return { data, loading, error };
};
