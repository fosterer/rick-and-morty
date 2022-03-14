
import Image from "next/image";

export const CardCharacter = (data: any) => {
  return (
    <div className="m-3 ring rounded p-1 ring-yellow-700 bg-slate-400 text-slate-800">
      <ul className="text-center" style={{ width: "160px", height: "242px" }}>
        <li>
          <Image
            className="rounded-t"
            src={data.image}
            width={160}
            height={160}
          />
        </li>
        <li className="text-xl truncate overflow-hidden mx-1">{data.name}</li>
        <li className="truncate overflow-hidden mx-1">{data.species}</li>
        <li className="mx-1">{data.status}</li>
      </ul>
    </div>
  );
};
