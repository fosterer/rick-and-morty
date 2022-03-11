import { Cardspace } from "@/features/cardspace";
import { IndexHeader } from "@/features/header";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed flex items-center z-10 w-full h-24 bg-slate-700">
        <IndexHeader />
      </div>
      <div className="pt-24 z-0">
        <Cardspace />
      </div>
    </div>
  );
}
