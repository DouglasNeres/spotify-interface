import { Maximize2 } from "lucide-react";
import {
  Laptop2,
  LayoutList,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";

import Image from "next/image";

export function Footer(){
  return (
    <>
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
        </>
  )
}
