import { Maybe } from "@/types/typesGraphApi";

export const FieldText = ({
  title,
  data,
}: {
  title: string;
  data: Maybe<string> | undefined;
}) => {
  const _data = !data || data.length === 0 ? "?" : data;

  return (
    <div className="space-x-2">
      <span>{title}</span>
      <span>{_data}</span>
    </div>
  );
};
