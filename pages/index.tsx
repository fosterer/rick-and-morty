import { IndexBody } from "@/features/body";
import { Cardspace } from "@/features/cardspace";
import { IndexHeader } from "@/features/header";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed flex items-center z-10 w-full h-16 bg-slate-700"><IndexHeader /></div>
      <div className="pt-16 z-0"><IndexBody /></div>
    </div>
  );
}
