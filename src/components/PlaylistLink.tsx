import Image from "next/image";
import { Play } from "lucide-react";

interface PlaylistLinkProps{
  image: string;
  strong: string;
}

export function PlaylistLink({ image, strong }: PlaylistLinkProps) {
  return (
    <div>
       <a href="" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
          <Image src={image} width={100} height={100} alt="Imagem Determinante de Playlist Curtida." />
          <strong>{strong}</strong>
          <button className="p-2 w-12 h-12 flex items-center justify-center pl-3 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play fill="100%" />
          </button>
        </a>
    </div>
  )
}
