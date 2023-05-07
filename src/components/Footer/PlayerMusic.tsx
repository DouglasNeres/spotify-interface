import { Play, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react";

export function PlayerMusic() {
  return (
    <div className="flex flex-col items-center">

      {/* Interaction Icons */} 
      
      <div className="flex items-center gap-6">
        <Shuffle size={20} className="text-zinc-200" />
        <SkipBack size={20} className="text-zinc-200" />
        <button className="p-2 w-10 h-10 flex items-center justify-center pl-3 rounded-full bg-white text-black">
          <Play fill="100%" />
        </button>
        <SkipForward size={20} className="text-zinc-200" />
        <Repeat size={20} className="text-zinc-200" />
      </div>

      {/* Line Music */}

      <div className="flex items-center gap-2">
        <span className="text-xs text-zinc-400">0:31</span>
        <div className="h-1 rounded-full w-96 bg-zinc-600">
          <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
        </div>
        <span className="text-xs text-zinc-400">2:14</span>
      </div>
    </div>
  );
}
