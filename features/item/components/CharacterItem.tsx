import { useCharacterItemData } from "@/features/item/api/useCharacterItemData";
import Link from "next/link";

export const CharacterItem = ({ id }: { id: string }) => {
  const { data, loading, error } = useCharacterItemData(id);
  if (loading) return <div className="m-5">Loading...</div>;
  if (error)
    return <div className="m-5">Oh no, error occured... {error.message}</div>;
  if (!data) throw new Error();
  const item = data.character;

  return (
    <>
      <div>
        <span>Name:</span>
        <span>{item.name}</span>
      </div>
      <div>
        <span>Status:</span>
        <span>{item.status}</span>
      </div>
      <div>
        <span>Species:</span>
        <span>{item.species}</span>
      </div>
      <div>
        <span>Type:</span>
        <span>{item.type}</span>
      </div>
      <div>
        <span>Gender:</span>
        <span>{item.gender}</span>
      </div>
      <div>
        <span>Origin:</span>
        <Link href={`/${"Location"}/${item.origin?.id}`}>
          <span>{item.origin?.name}</span>
        </Link>
      </div>
      <div>
        <span>Location:</span>
        <Link href={`/${"Location"}/${item.location?.id}`}>
          <span>{item.location?.name}</span>
        </Link>
      </div>
    </>
  );
};
