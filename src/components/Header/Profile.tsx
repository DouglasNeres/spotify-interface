"use client"

import { ChevronDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Profile() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenToggle = () => { setIsOpen(!isOpen) }

  return (
    <div>
      <div className="h-10 w-36 bg-black rounded-full flex items-center justify-between ">
        <Image
          src="/Profile.png"
          width={40}
          height={40}
          alt="Imagem de Perfil"
        />
        <strong className="ml-2">Angel</strong>
        <button className="hover:bg-zinc-600 rounded-full flex justify-center items-center mr-2" onClick={handleOpenToggle}>
          <ChevronDown className="" />
        </button>
      </div>

    {isOpen && (
      <div className="flex justify-end">
        <div className="w-60 h-40 bg-zinc-700 flex justify-between flex-col mt-2 px-6 py-4 rounded-lg absolute ">
          <a
            href=""
            className="flex justify-between hover:text-zinc-400 font-bold"
          >
            Account <ExternalLink />
          </a>
          <a href="" className="hover:text-zinc-400 font-bold">
            Profile
          </a>
          <a href="" className="hover:text-zinc-400 font-bold">
            Log out
          </a>
        </div>
      </div>
      )}
    </div>
  );
}
