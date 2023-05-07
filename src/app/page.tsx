import { Footer } from "@/components/Footer/Footer";
import { Main } from "@/components/Main";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <Sidebar />
        </aside>

        <Main />
      </div>
      <Footer />
    </div>
  );
}
