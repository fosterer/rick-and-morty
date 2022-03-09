import { useRickAndMortyData } from "@/features/cardspace/api/useRickAndMortyData";

export const Cardspace = () => {
  const { data, loading, error } = useRickAndMortyData();

  if (loading) return <div> loading ... </div>;
  if (error) return <div> oh no... {error.message}</div>;
  console.log(data);

  return <div className="m-3">hello</div>;
};
