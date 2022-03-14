import { IndexHeader } from "@/features/header";
import { IndexMain } from "@/features/main";

export default function Home() {
  return (
    <div id="index" className="h-screen flex flex-col">
      <IndexHeader />
      <IndexMain />
    </div>
  );
}
