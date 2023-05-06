import { Maximize2 } from "lucide-react";
import {
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  Laptop2,
  LayoutList,
  Library,
  Maximize,
  Mic2,
  Play,
  Repeat,
  SearchIcon,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
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
          <Image
            className="mt-10"
            src="/Spotify logo.png"
            width={150}
            height={150}
            alt="Logo Spotify"
          />
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

          <h1 className="font-semibold text-3xl mt-10">Good Afetrmoon</h1>

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

          <h2 className="font-semibold text-2xl mt-10">Shows you might like</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded hover-md:bg-white/10 flex flex-col gap-2"
            >
              <Image
                src="/LikedSongs.png"
                className="w-full"
                width={120}
                height={120}
                alt=""
              />
              <strong className="font-semibold">Liked Soungs</strong>
              <span className="text-xs text-zinc-500">Soungs Likeds</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                src="/LikedSongs.png"
                className="w-full"
                width={120}
                height={120}
                alt=""
              />
              <strong className="font-semibold">Liked Soungs</strong>
              <span className="text-xs text-zinc-500">Soungs Likeds</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                src="/LikedSongs.png"
                className="w-full"
                width={120}
                height={120}
                alt=""
              />
              <strong className="font-semibold">Liked Soungs</strong>
              <span className="text-xs text-zinc-500">Soungs Likeds</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                src="/LikedSongs.png"
                className="w-full"
                width={120}
                height={120}
                alt=""
              />
              <strong className="font-semibold">Liked Soungs</strong>
              <span className="text-xs text-zinc-500">Soungs Likeds</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2"
            >
              <Image
                src="/LikedSongs.png"
                className="w-full"
                width={120}
                height={120}
                alt=""
              />
              <strong className="font-semibold">Liked Soungs</strong>
              <span className="text-xs text-zinc-500">Soungs Likeds</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-1000 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex gap-3">
          <Image width={50} height={50} src="/AlbumElectronic.png" alt="" />
          <div className="flex flex-col">
            <strong className="font-normal">Rope</strong>
            <span className="text-xs text-zinc-500">Foo Fighters</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200"/>
            <SkipBack size={20} className="text-zinc-200"/>
            <button className="p-2 w-10 h-10 flex items-center justify-center pl-3 rounded-full bg-white text-black">
              <Play fill="100%" />
            </button>
            <SkipForward size={20} className="text-zinc-200"/>
            <Repeat size={20} className="text-zinc-200"/>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:14</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Mic2 size={20}/>
          <LayoutList size={20} />
          <Laptop2 size={20}/>
          <div className="flex items-center gap-2">
            <Volume size={20}/>
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-12 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
