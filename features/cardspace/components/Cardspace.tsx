import { useRickAndMortyData } from "@/features/cardspace/api/useRickAndMortyData";
import { CardCharacter } from "@/features/cardspace/components/CardCharacter";
import { CardEpisode } from "@/features/cardspace/components/CardEpisode";
import { CardLocation } from "@/features/cardspace/components/CardLocation";
import { CardSkeleton } from "@/features/cardspace/components/CardSkeleton";
import { Character, Episode, Location } from "@/features/cardspace/types/types";
import Image from "next/image";

export const Cardspace = () => {
  const { data, loading, error } = useRickAndMortyData();

  const LoadingPulse = () => {
    const foo = Array.from(Array(10).keys());
    return (
      <div className="m-3 flex flex-wrap">
        {foo.map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  };

  if (loading) return <LoadingPulse />;
  if (error)
    return (
      <div className="w-full text-2xl text-slate-100 text-center mt-20">
        Oh no... {error.message}
      </div>
    );
  if (!data) throw new Error();

  if (!data.characters && !data.episodes && !data.locations)
    return (
      <div className="w-full text-2xl text-slate-100 text-center mt-20">
        <Image
          src={"https://rickandmortyapi.com/api/character/avatar/348.jpeg"}
          width={200}
          height={200}
          className="rounded-full"
        />
        <div>Hmm... please try something else...</div>
      </div>
    );

  return (
    <div className="m-3 flex flex-wrap justify-center">
      {data.characters?.results.map((itm: Character, index) => (
        <CardCharacter {...itm} key={index} />
      ))}
      {data.episodes?.results.map((itm: Episode, index) => (
        <CardEpisode {...itm} key={index} />
      ))}
      {data.locations?.results.map((itm: Location, index) => (
        <CardLocation {...itm} key={index} />
      ))}
    </div>
  );
};
