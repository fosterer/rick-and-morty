import { useCharacterItemData } from "../api/useCharacterItemData";
import { FieldLink } from "./FieldLink";
import { FieldText } from "./FieldText";
import Image from "next/image";
import { ListLayout } from "@/features/list";
import { CardEpisode } from "@/features/card";
import Error from "next/error";

export const CharacterItem = ({ id }: { id: string }) => {
  const { data, loading, error } = useCharacterItemData(id);
  if (loading) return <div className="m-5">Loading...</div>;
  if (error)
    return <div className="m-5">Oh no, error occured... {error.message}</div>;
  if (!data) throw 'error';
  const item = data.character;
  if (item == null) return <Error statusCode={404} />;
  const cards = item.episode.map((episode) => (
    <CardEpisode {...episode} key={episode?.id} />
  ));

  return (
    <>
      <div className="m-3 flex flex-wrap">
        <section className="m-2">
          {item.image ? (
            <Image
              className="rounded z-0"
              src={item.image}
              width={200}
              height={200}
            />
          ) : (
            <></>
          )}
        </section>
        <section className="m-2">
          <FieldText {...{ title: "Name:", data: item.name }} />
          <FieldText {...{ title: "Status:", data: item.status }} />
          <FieldText {...{ title: "Species:", data: item.species }} />
          <FieldText {...{ title: "Type:", data: item.type }} />
          <FieldText {...{ title: "Gender:", data: item.gender }} />
          <FieldLink
            {...{
              title: "Origin:",
              id: item.origin?.id,
              name: item.origin?.name,
              type: "Location",
            }}
          />
          <FieldLink
            {...{
              title: "Location:",
              id: item.location?.id,
              name: item.location?.name,
              type: "Location",
            }}
          />
          <FieldText
            {...{
              title: "Created:",
              data: item.created?.split("T")[0],
            }}
          />
        </section>
      </div>
      <section className="bg-slate-800 flex flex-col grow m-2">
        <label className="m-2 text-xl">Episodes for this character:</label>
        <ListLayout {...{ cardList: cards }} />
      </section>
    </>
  );
};
