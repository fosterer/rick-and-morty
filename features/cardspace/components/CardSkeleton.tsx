

export const CardSkeleton = () => {
  return (
    <>
      <div className="m-3 ring-2 rounded p-1 ring-yellow-800 bg-slate-400">
        <ul
          className="text-center flex flex-col justify-center"
          style={{ width: "200px", height: "282px" }}
        >
          <li className="animate-pulse">Loading...</li>
        </ul>
      </div>
    </>
  );
};
