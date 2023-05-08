import { ReactNode } from "react";

interface TypeLinksProps {
  type: "pages" | "playlist";
  icon?: ReactNode;
  name: string;
}

export function SidebarLinks({ type, icon, name }: TypeLinksProps) {
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
