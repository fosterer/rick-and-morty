import { Location } from "@/features/cardspace/types/types";

export const CardLocation = (data: Location) => {
  return (
    <>
      <div className="m-3 ring-2 rounded p-1 ring-yellow-800 bg-slate-400">
        <ul
          className="text-center flex flex-col justify-center"
          style={{ width: "200px", height: "282px" }}
        >
          <li className="text-sm">Location</li>
          <li className=" text-xl mx-1">{data.name}</li>
          <li>{data.type}</li>
          <li>{data.dimension}</li>
        </ul>
      </div>
    </>
  );
};
