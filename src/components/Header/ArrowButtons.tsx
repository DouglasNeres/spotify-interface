import { ChevronLeft, ChevronRight } from "lucide-react";

export function ArrowButtons() {
  return (
    <div>
        <button className="hover:bg-zinc-600 rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="hover:bg-zinc-600 rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
    </div>
  );
}
