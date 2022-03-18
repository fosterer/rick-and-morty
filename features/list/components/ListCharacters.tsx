import { CardCharacter } from "@/features/card";
import { useCharactersData } from "../api/useCharactersData";
import { ListLayout } from "./ListLayout";

export const ListCharacters = () => {
  const { data, loading, error, setPage } = useCharactersData();

  if (loading) return <div className="m-5">Loading...</div>;
  if (error) return <div>Oh no, an error occured...</div>;
  if (!data || !data.characters)
    return <div className="m-5">Hmm, please try someting else...</div>;

  const cards = data.characters.results.map((row) => (
    <CardCharacter {...row} key={row.id} />
  ));

  return (
    <ListLayout
      {...{
        cardList: cards,
        nextPage: data.characters.info.next,
        previousPage: data.characters.info.prev,
        setPage,
      }}
    />
  );
};
