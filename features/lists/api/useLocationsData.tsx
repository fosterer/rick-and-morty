import { Character, Episode, Info, Location } from "@/types/typesGraphApi";
import { gql, useQuery } from "@apollo/client";

const useLocationsDataQuery = gql`
  query useLocationsDataQuery($page: Int) {
    locations(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
      }
    }
  }
`;

interface LocationDataQuery {
  locations: {
    info: Info;
    results: Pick<Location, "id" | "name" | "type">[];
  };
}

export const useLocationsData = (page: number) => {
  const { data, loading, error } = useQuery<LocationDataQuery>(
    useLocationsDataQuery,
    {
      variables: { page: page },
      errorPolicy: "ignore",
    }
  );

  return { data, loading, error };
};
