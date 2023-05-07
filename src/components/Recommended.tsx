import Image from "next/image"
import ButtonPlayGreen from "./ButtonPlayGreen";

interface RecommendedProps{
  image: string;
  strong: string;
  span: string;
}

export function Recommended({ image, strong, span }:RecommendedProps) {
  return (
    <div>
       <a
          href=""
          className="bg-white/5 p-3 group rounded-md hover:bg-white/10 flex flex-col gap-2"
        >
          <Image
            src={image}
            className="w-full"
            width={120}
            height={120}
            alt=""
          />
          <strong className="font-semibold">{strong}</strong>
          <span className="text-xs text-zinc-500">{span}</span>
          <ButtonPlayGreen type="absolute"/>
        </a>
    </div>
  )
}
