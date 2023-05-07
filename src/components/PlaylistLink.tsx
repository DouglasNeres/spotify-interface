import Image from "next/image";
import { Play } from "lucide-react";
import ButtonPlayGreen from "./ButtonPlayGreen";

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
          <ButtonPlayGreen type="normal"/>
        </a>
    </div>
  )
}
