import Image from "next/image";

export function MusicPlayning() {
  return (
    <div className="flex gap-3">
      <Image width={50} height={50} src="/AlbumElectronic.png" alt="" />
      <div className="flex flex-col">
        <strong className="font-normal">Rope</strong>
        <span className="text-xs text-zinc-500">Foo Fighters</span>
      </div>
    </div>
  );
}
