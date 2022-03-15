import create from "zustand";

interface IndexStore {
  queryParamName: string;
  setQueryParamName: (newNameValue: string) => void;
}

export const useIndexStore = create<IndexStore>((set) => ({
  queryParamName: "",
  setQueryParamName: (newFilterNameValue: string) =>
    set({ queryParamName: newFilterNameValue }),
}));
