import Image from "next/image";
import { SidebarLinks } from "./SidebarLinks";
import { HomeIcon, Library, Search } from "lucide-react";

const linkPages = [
  {
    linkIcon: <HomeIcon />,
    linkName: "Home",
  },
  {
    linkIcon: <Search />,
    linkName: "Search",
  },
  {
    linkIcon: <Library />,
    linkName: "Library",
  },
];

const linkPlaylist = [
  {
    linkNamed: "Gospel 2023",
  },
  {
    linkNamed: "Lo-Fi Relax",
  },
  {
    linkNamed: "Top Brasil",
  },
  {
    linkNamed: "Worship",
  },
];

export function Sidebar() {
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
        
      </nav>
      <nav className="mt-10 pt-10 border-top border-zinc-1000 flex flex-col gap-3"></nav>
    </>
  );
}
