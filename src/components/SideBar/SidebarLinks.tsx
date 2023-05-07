interface TypeLinks {
  type: "pages" | "playlist";
}

type LinksProps = {
  icon?: string;
  name: string;
}

export function SidebarLinks({ type }: TypeLinks, { icon, name }: LinksProps) {
  return (
    <div>
      {type == "pages" ? (
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          {icon}
          {name}
        </a>
      ) : (
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
          {name}
        </a>
      )}
    </div>
  );
}
