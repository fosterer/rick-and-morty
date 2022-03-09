import { useIndexStore } from "@/stores/indexStore";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const SearchBox = () => {
  const [value, setValue] = useState("");
  const setSearchPhrase = useDebouncedCallback(
    useIndexStore((state) => state.setQueryParamName),
    1500
  );

  return (
    <span>
      <input
        className="mx-5 ring px-2 py-1 rounded focus:outline-none focus:ring-blue-500"
        placeholder="Type to discover..."
        type={"text"}
        value={value}
        onChange={(e) => {
          const value = e.currentTarget.value;
          setValue(value);
          setSearchPhrase(value);
        }}
      />
    </span>
  );
};
