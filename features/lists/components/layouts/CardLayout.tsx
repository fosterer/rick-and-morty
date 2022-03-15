import { Maybe } from "@/types/typesGraphApi";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  __typename: string | undefined;
  id: Maybe<string> | undefined;
}

export const CardLayout = ({ children, __typename, id }: Props) => {
  return (
    <div className="relative m-3 ring rounded p-1 ring-yellow-700 bg-slate-400 text-slate-800">
      <div
        id="hover-overlay"
        className="bg-slate-400 opacity-0 hover:opacity-80 z-50 absolute  -inset-0 rounded flex flex-col justify-center place-items-center"
      >
        <button className="px-3 py-2 text-lg bg-slate-800 hover:bg-slate-900 text-slate-100 rounded">
          View
        </button>
      </div>
      {children}
    </div>
  );
};
