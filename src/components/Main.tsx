import Image from "next/image";

import {
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  Library,
  Play,
  SearchIcon,
} from "lucide-react";

export function Main() {
  return (
    <div>
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
    </div>
  )
}
