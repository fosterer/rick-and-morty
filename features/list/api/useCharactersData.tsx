import { CharactersDataQuery } from "../../../types/typesQuery";
import { gql, useQuery } from "@apollo/client";
import { useIndexStore } from "@/stores/indexStore";
import { useState } from "react";

const useCharactersDataQuery = gql`
  query useCharactersDataQuery($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
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

export const useCharactersData = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const userInputFilter = useIndexStore((state) => state.queryParamName);
  if (filter !== userInputFilter) {
    setPage(1);
    setFilter(userInputFilter);
  }
  const { data, loading, error } = useQuery<CharactersDataQuery>(
    useCharactersDataQuery,
    {
      variables: { page: page, name: filter },
      errorPolicy: "ignore",
    }
  );

  return { data, loading, error, setPage };
};
