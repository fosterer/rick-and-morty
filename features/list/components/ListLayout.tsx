import { Maybe } from "@/types/typesGraphApi";

interface Props {
  cardList: JSX.Element[];
  previousPage?: Maybe<number> | undefined;
  nextPage?: Maybe<number> | undefined;
  setPage?: (page: number) => void;
}

export const ListLayout = ({
  cardList,
  previousPage,
  nextPage,
  setPage,
}: Props) => {
  return (
    <div id="list-of-cards" className="flex flex-col grow">
      <div className="flex flex-col grow relative overflow-auto">
        <div className="absolute flex flex-wrap">{cardList}</div>
      </div>

      <div className="mx-4">
        <div className="float-right space-x-3 m-4">
          <button
            className="bg-slate-700 px-3 py-2 rounded hover:bg-slate-600"
            hidden={!previousPage}
            onClick={() => {
              setPage && setPage(previousPage ? previousPage : 1);
            }}
          >
            Previous Page
          </button>
          <button
            className="bg-slate-700 px-3 py-2 rounded hover:bg-slate-600"
            hidden={!nextPage}
            onClick={() => {
              setPage && setPage(nextPage ? nextPage : 1);
            }}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};
