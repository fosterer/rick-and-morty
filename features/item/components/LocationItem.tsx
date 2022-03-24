import { CardCharacter } from "@/features/card";
import { useLocationItemData } from "@/features/item/api/useLocationItemData";
import { FieldText } from "@/features/item/components/FieldText";
import { ListLayout } from "@/features/list";
import Error from "next/error";

export const LocationItem = ({ id }: { id: string }) => {
  const { data, loading, error } = useLocationItemData(id);
  if (loading) return <div className="m-5">Loading...</div>;
  if (error)
    return <div className="m-5">Oh no, error occured... {error.message}</div>;
  if (!data) throw 'error';
  const item = data.location;
  if (item == null) return <Error statusCode={404} />;

  const cards = item.residents.map((resident) => (
    <CardCharacter {...resident} key={resident?.id} />
  ));

  return (
    <>
      <div className="m-3 flex flex-wrap">
        <section className="m-2">
          <FieldText {...{ title: "Name:", data: item.name }} />
          <FieldText {...{ title: "Type:", data: item.type }} />
          <FieldText {...{ title: "Dimension:", data: item.dimension }} />
          <FieldText
            {...{
              title: "Created:",
              data: item.created?.split("T")[0],
            }}
          />
        </section>
      </div>
      <section className="bg-slate-800 flex flex-col grow m-2">
        <label className="m-2 text-xl">Residents for this location:</label>
        <ListLayout {...{ cardList: cards }} />
      </section>
    </>
  );
};
