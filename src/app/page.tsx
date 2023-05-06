import {
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  Library,
  Play,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";
<strong></strong>;

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <SearchIcon />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-10 pt-10 border-top border-zinc-1000 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Gospel Music
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Lo-fi Relaxing
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              My Playlist
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top Brasil
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-4xl mt-10">Good Afetrmoon</h1>

          <div className="grid grid-cols-3 gap-4">
            <a
              href=""
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/LikedSongs.png"
                width={100}
                height={100}
                alt="Imagem Determinante de Playlist Curtida."
              />
              <strong>Liked Songs</strong>
              <button className="p-2 w-12 h-12 flex items-center justify-center pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="100%" />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image src="/AlbumCapa.png" width={100} height={100} alt="" />
              <strong>Neffex Playlist</strong>
              <button className="p-2 w-12 h-12 flex items-center justify-center pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="100%" />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/AlbumElectronic.png"
                width={100}
                height={100}
                alt=""
              />
              <strong>Dance / Electronic Mix</strong>
              <button className="p-2 w-12 h-12 flex items-center justify-center pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="100%" />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image src="/AlbumCapa.png" width={100} height={100} alt="" />
              <strong>Neffex Playlist</strong>
              <button className="p-2 w-12 h-12 flex items-center justify-center pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="100%" />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/AlbumElectronic.png"
                width={100}
                height={100}
                alt=""
              />
              <strong>Dance / Electronic Mix</strong>
              <button className="p-2 w-12 h-12 flex items-center justify-center pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="100%" />
              </button>
            </a>
            <a
              href=""
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image src="/LikedSongs.png" width={100} height={100} alt="" />
              <strong>Liked Songs</strong>
              <button className="p-2 w-12 h-12 flex items-center justify-center pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="100%" />
              </button>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-1000 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
