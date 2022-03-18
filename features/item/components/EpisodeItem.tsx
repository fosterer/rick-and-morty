import { CardCharacter } from "@/features/card";
import { useEpisodeItemData } from "@/features/item/api/useEpisodeItemData";
import { FieldText } from "@/features/item/components/FieldText";
import { ListLayout } from "@/features/list";

export const EpisodeItem = ({ id }: { id: string }) => {
  const { data, loading, error } = useEpisodeItemData(id);
  if (loading) return <div className="m-5">Loading...</div>;
  if (error)
    return (
      <div className="m-5">Oh no, an error occured... {error.message}</div>
    );
  if (!data) throw new Error();
  const item = data.episode;
  const cards = item.characters.map((character) => (
    <CardCharacter {...character} key={character?.id} />
  ));

  return (
    <>
      <div className="m-3 flex flex-wrap">
        <section className="m-2">
          <FieldText {...{ title: "Name:", data: item.name }} />
          <FieldText {...{ title: "Air Date:", data: item.air_date }} />
          <FieldText {...{ title: "Episode:", data: item.episode }} />
          <FieldText
            {...{
              title: "Created:",
              data: item.created?.split("T")[0],
            }}
          />
        </section>
      </div>
      <section className="bg-slate-800 flex flex-col grow m-2">
        <label className="m-2 text-xl">Characters for this episode:</label>
        <ListLayout {...{ cardList: cards }} />
      </section>
    </>
  );
};
