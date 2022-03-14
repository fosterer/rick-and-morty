import { LocationsDataQuery } from "../types/types";
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

export const useLocationsData = (page: number) => {
  const { data, loading, error } = useQuery<LocationsDataQuery>(
    useLocationsDataQuery,
    {
      variables: { page: page },
      errorPolicy: "ignore",
    }
  );

  return { data, loading, error };
};
