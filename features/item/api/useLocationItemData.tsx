import { Location } from "@/types/typesGraphApi";
import { gql, useQuery } from "@apollo/client";

type LocationResult = { location: Location };

const useLocationItemDataQuery = gql`
  query useLocationItemDataQuery($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
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

export const useLocationItemData = (id: string) => {
  const { data, loading, error } = useQuery<LocationResult>(
    useLocationItemDataQuery,
    {
      variables: { id: id },
      errorPolicy: "ignore",
    }
  );

  return { data, loading, error };
};
