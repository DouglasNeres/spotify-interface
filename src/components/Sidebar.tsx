import Image from "next/image";

import { Home as HomeIcon, Library, SearchIcon } from "lucide-react";

export default function Sidebar() {
  return (
    <>
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
    </>
  );
}
