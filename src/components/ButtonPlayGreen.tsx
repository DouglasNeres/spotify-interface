import { Play } from "lucide-react";

interface TypeButton {
  type: "normal" | "absolute";
}

export default function ButtonPlayGreen({ type }: TypeButton) {
  return (
    <div className="ml-auto mr-8">
      {type == "normal" ? (
        <button className="p-2 w-12 h-12 flex items-center justify-center pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
          <Play fill="100%" />
        </button>
      ) : (
        <button className="p-2 w-12 h-12 flex items-center justify-center pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible absolute bottom-56">
          <Play fill="100%" />
        </button>
      )}
    </div>
  );
}
