import { ListCharacters } from "@/features/list";
import { ListEpisodes } from "@/features/list";
import { ListLocations } from "@/features/list";
import { Tab } from "@headlessui/react";
import { ReactNode } from "react";

const StyledTab = ({ children }: { children: ReactNode }) => (
  <Tab as="span">
    {({ selected }) => (
      <div
        className={`py-2 px-3 m-1 rounded ${
          selected ? "bg-slate-500" : "bg-slate-800 hover:bg-slate-600"
        }`}
      >
        {children}
      </div>
    )}
  </Tab>
);

export const IndexMain = () => {
  return (
    <Tab.Group as="div" id="index-main-tabs" className="flex flex-col grow">
      <Tab.List className="m-2 flex flex-wrap">
        <StyledTab>Characters</StyledTab>
        <StyledTab>Episodes</StyledTab>
        <StyledTab>Locations</StyledTab>
      </Tab.List>
      <Tab.Panels id="tab-panels" className="flex flex-col grow">
        <Tab.Panel className="bg-slate-800 flex flex-col grow">
          <ListCharacters />
        </Tab.Panel>
        <Tab.Panel className="bg-slate-800 flex flex-col grow">
          <ListEpisodes />
        </Tab.Panel>
        <Tab.Panel className="bg-slate-800 flex flex-col grow">
          <ListLocations />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
