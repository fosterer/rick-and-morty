import { SearchBox } from "@/features/header/components/SearchBox";

export const IndexHeader = () => {
  return (
    <header className="flex flex-wrap items-center w-full bg-slate-700 p-4 space-x-3">
      <div className="text-slate-100 text-lg m-1">
        Rick and Morty Series Explorer
      </div>
      <SearchBox />
    </header>
  );
};
