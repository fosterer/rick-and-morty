import { useRouter } from "next/router";
import Error from "next/error";
import { ReactNode } from "react";
import { CharacterItem } from "./CharacterItem";
import { EpisodeItem } from "./EpisodeItem";
import { LocationItem } from "./LocationItem";

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

  return views.get(item[0]);
};
