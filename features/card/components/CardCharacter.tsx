import { CharactersResult } from "../../../types/typesQuery";
import Image from "next/image";
import { CardLayout } from "@/features/card/components/CardLayout";

export const CardCharacter = (data: CharactersResult) => {
  return (
    <CardLayout {...{ __typename: data.__typename, id: data.id }}>
      <ul className="text-center z-10" style={{ width: "160px", height: "242px" }}>
        <li>
          {data.image ? (
            <Image
              className="rounded-t z-0"
              src={data.image}
              width={160}
              height={160}
            />
          ) : (
            <></>
          )}
        </li>
        <li className="text-xl truncate overflow-hidden mx-1">{data.name}</li>
        <li className="truncate overflow-hidden mx-1">{data.species}</li>
        <li className="mx-1">{data.status}</li>
      </ul>
    </CardLayout>
  );
};
