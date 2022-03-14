import { useEpisodesData } from "../api/useEpisodesData";
import { useState } from "react";
import { CardEpisode } from "./CardEpisode";

export const ListEpisodes = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useEpisodesData(page);

  if (loading) return <div className="m-5">Loading...</div>;
  if (error) return <div>Oh no, an error occured...</div>;
  if (!data) throw new Error();

  return (
    <div id="list-episodes" className="flex flex-col grow">
      <div className="flex flex-col grow relative overflow-auto">
        <div className="absolute flex flex-wrap">
          {" "}
          {data.episodes.results.map((row) => (
            <CardEpisode {...row} key={row.id} />
          ))}
        </div>
      </div>

      <div className="mx-4">
        <div className="float-right space-x-3 m-4">
          <button
            className="bg-slate-700 px-2 py-1 rounded hover:bg-slate-600"
            hidden={data.episodes.info.prev === null}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previous Page
          </button>
          <button
            className="bg-slate-700 px-2 py-1 rounded hover:bg-slate-600"
            hidden={data.episodes.info.next === null}
            onClick={() => {
              const next = page + 1;
              setPage(next);
            }}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};
