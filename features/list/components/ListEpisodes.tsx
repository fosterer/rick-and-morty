import { CardEpisode } from "@/features/card";
import { useEpisodesData } from "../api/useEpisodesData";
import { ListLayout } from "./ListLayout";

export const ListEpisodes = () => {
  const { data, loading, error, setPage } = useEpisodesData();

  if (loading) return <div className="m-5">Loading...</div>;
  if (error) return <div>Oh no, an error occured...</div>;
  if (!data || !data.episodes)
    return <div className="m-5">Hmm, please try someting else...</div>;

  const cards = data.episodes.results.map((row) => (
    <CardEpisode {...row} key={row.id} />
  ));

  return (
    <ListLayout
      {...{
        cardList: cards,
        nextPage: data.episodes.info.next,
        previousPage: data.episodes.info.prev,
        setPage,
      }}
    />
  );
};
