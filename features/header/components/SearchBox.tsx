import { useIndexStore } from "@/stores/indexStore";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const SearchBox = () => {
  const phraseInStoreIfAny = useIndexStore((state) => state.queryParamName);
  const [value, setValue] = useState(phraseInStoreIfAny);
  const setSearchPhrase = useDebouncedCallback(
    useIndexStore((state) => state.setQueryParamName),
    1500
  );

  return (
    <span>
      <input
        className="m-1 ring px-2 py-1 rounded focus:outline-none focus:ring-blue-500 bg-slate-300 text-slate-800 placeholder:text-slate-700"
        placeholder="Find by name..."
        type={"text"}
        value={value}
        autoFocus
        maxLength={20}
        onChange={(e) => {
          const value = e.currentTarget.value;
          setValue(value);
          setSearchPhrase(value);
        }}
      />
    </span>
  );
};
