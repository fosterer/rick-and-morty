import { LocationsDataQuery } from "../../../types/typesQuery";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useIndexStore } from "@/stores/indexStore";

const useLocationsDataQuery = gql`
  query useLocationsDataQuery($page: Int, $name: String) {
    locations(page: $page, filter: { name: $name }) {
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

export const useLocationsData = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const userInputFilter = useIndexStore((state) => state.queryParamName);
  if (filter !== userInputFilter) {
    setPage(1);
    setFilter(userInputFilter);
  }
  const { data, loading, error } = useQuery<LocationsDataQuery>(
    useLocationsDataQuery,
    {
      variables: { page: page, name: filter },
      errorPolicy: "ignore",
    }
  );

  return { data, loading, error, setPage };
};
