import { CardLayout } from "./CardLayout";
import { LocationsResult } from "@/types/typesQuery";

export const CardLocation = (data: LocationsResult) => {
  return (
    <CardLayout {...{ __typename: data.__typename, id: data.id }}>
      <ul
        className="text-center flex flex-col justify-center"
        style={{ width: "330px", height: "100px" }}
      >
        <li className="text-xl truncate overflow-hidden mx-1">{data.name}</li>
        <li className="truncate overflow-hidden mx-1">{data.type}</li>
      </ul>
    </CardLayout>
  );
};
