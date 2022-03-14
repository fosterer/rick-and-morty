import { LocationsResult } from "../types/types";

export const CardLocation = (data: LocationsResult) => {
  return (
    <div className="m-3 ring rounded p-1 ring-yellow-700 bg-slate-400 text-slate-800">
      <ul
        className="text-center flex flex-col justify-center"
        style={{ width: "330px", height: "100px" }}
      >
        <li className="text-xl truncate overflow-hidden mx-1">{data.name}</li>
        <li className="truncate overflow-hidden mx-1">{data.type}</li>
      </ul>
    </div>
  );
};
