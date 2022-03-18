import { EpisodesDataQuery } from "../../../types/typesQuery";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useIndexStore } from "@/stores/indexStore";

const useEpisodesDataQuery = gql`
  query useEpisodesDataQuery($page: Int, $name: String) {
    episodes(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export const useEpisodesData = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const userInputFilter = useIndexStore((state) => state.queryParamName);
  if (filter !== userInputFilter) {
    setPage(1);
    setFilter(userInputFilter);
  }
  const { data, loading, error } = useQuery<EpisodesDataQuery>(
    useEpisodesDataQuery,
    {
      variables: { page: page, name: filter },
      errorPolicy: "ignore",
    }
  );

  return { data, loading, error, setPage };
};
