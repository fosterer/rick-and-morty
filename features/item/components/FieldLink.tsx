import { Maybe } from "@/types/typesGraphApi";
import Link from "next/link";

export const FieldLink = ({
  title,
  id,
  name,
  type,
}: {
  title: string;
  id: Maybe<string> | undefined;
  name: Maybe<string> | undefined;
  type: "Character" | "Episode" | "Location";
}) => {
  return (
    <div className="space-x-2">
      <span>{title}</span>
      <Link href={`/${type}/${id}`}>
        <button
          disabled={id === null}
          className="hover:underline hover:text-white disabled:hover:no-underline"
        >
          <strong className="text-lg">{name}</strong>
        </button>
      </Link>
    </div>
  );
};
