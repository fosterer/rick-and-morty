import { useRouter } from "next/router";
import Error from "next/error";
import { ReactNode } from "react";
import { CharacterItem } from "./CharacterItem";
import { EpisodeItem } from "./EpisodeItem";
import { LocationItem } from "./LocationItem";
import Link from "next/link";

const supportedEntities = ["Character", "Episode", "Location"];

export const Item = () => {
  const router = useRouter();
  const { item } = router.query;
  if (item?.length !== 2) return <Error statusCode={404} />;
  const typename = item[0];
  if (!supportedEntities.includes(typename)) return <Error statusCode={404} />;

  const views = new Map<string, ReactNode>([
    ["Character", <CharacterItem {...{ id: item[1] }} />],
    ["Episode", <EpisodeItem {...{ id: item[1] }} />],
    ["Location", <LocationItem {...{ id: item[1] }} />],
  ]);

  return (
    <>
      <header className="flex flex-wrap items-center w-full bg-slate-700 p-4 space-x-3">
        <button
          onClick={() => router.back()}
          className="rounded py-1 px-2 bg-slate-500 hover:bg-slate-600"
        >
          Previous
        </button>
        <Link href="/">
          <button className="rounded py-1 px-2 bg-slate-500 hover:bg-slate-600">
            Home
          </button>
        </Link>
        <div className="text-slate-100 text-lg m-1">
          {`Rick and Morty: ${item[0]}`}
        </div>
      </header>
      <div id="item-body" className="flex flex-col grow">
        {views.get(item[0])}
      </div>
    </>
  );
};
