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
    title: "Gospel 2023",
  },
  {
    title: "Lo-Fi Relax",
  },
  {
    title: "Top Brasil",
  },
  {
    title: "Worship",
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
        {linkPages.map((item) =>{
          return(
            <SidebarLinks type="pages" icon={item.linkIcon} name={item.linkName} key={item.linkName}/>
          )
        })}
      </nav>

      <div className="border border-zinc-500 mt-10"></div>
      
      <nav className="pt-10 border-top border-zinc-1000 flex flex-col gap-3">
      {linkPlaylist.map((item) =>{
          return(
            <SidebarLinks type="playlist" name={item.title} key={item.title}/>
          )
        })}
      </nav>
    </>
  );
}
