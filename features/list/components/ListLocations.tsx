import { CardLocation } from "@/features/card";
import { useLocationsData } from "../api/useLocationsData";
import { ListLayout } from "./ListLayout";

export const ListLocations = () => {
  const { data, loading, error, setPage } = useLocationsData();

  if (loading) return <div className="m-5">Loading...</div>;
  if (error) return <div>Oh no, an error occured...</div>;
  if (!data || !data.locations)
    return <div className="m-5">Hmm, please try someting else...</div>;

  const cards = data.locations.results.map((row) => (
    <CardLocation {...row} key={row.id} />
  ));

  return (
    <ListLayout
      {...{
        cardList: cards,
        nextPage: data.locations.info.next,
        previousPage: data.locations.info.prev,
        setPage,
      }}
    />
  );
};
