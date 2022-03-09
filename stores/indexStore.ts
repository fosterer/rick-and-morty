import create from "zustand";

interface IndexStore {
  queryParamName: string;
  setQueryParamName: (newParam: string) => void;
}

export const useIndexStore = create<IndexStore>((set) => ({
  queryParamName: "",
  setQueryParamName: (newParam: string) => set({ queryParamName: newParam }),
}));
