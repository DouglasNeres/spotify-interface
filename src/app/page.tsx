import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        
        <aside className="w-72 bg-zinc-950 p-6">
          <Sidebar />
        </aside>

        <main className="flex-1 p-6">
          <Main />
        </main>

      </div>
      <footer className="bg-zinc-1000 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <Footer />
      </footer>
    </div>
  );
}
