import { CardLayout } from "@/features/card/components/CardLayout";
import { EpisodesResult } from "../../../types/typesQuery";

export const CardEpisode = (data: EpisodesResult) => {
  return (
    <CardLayout {...{ __typename: data.__typename, id: data.id }}>
      <ul
        className="text-center flex flex-col justify-center"
        style={{ width: "330px", height: "100px" }}
      >
        <li className="text-xl truncate overflow-hidden mx-1">{data.name}</li>
        <li className="truncate overflow-hidden mx-1">{data.episode}</li>
        <li className="mx-1">{data.air_date}</li>
      </ul>
    </CardLayout>
  );
};
