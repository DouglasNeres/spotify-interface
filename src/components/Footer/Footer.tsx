import { PlayerMusic } from "./PlayerMusic";
import { MusicPlayning } from "./MusicPlayning";
import { MusicActions } from "./MusicActions";

export function Footer() {
  return (
    <div className="bg-zinc-1000 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <MusicPlayning />
      <PlayerMusic />
      <MusicActions />
    </div>
  );
}
