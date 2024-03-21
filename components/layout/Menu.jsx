"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            className={`flex gap-4 justify-start rounded-lg px-4 py-2 ${
              isActive && "bg-purple-1"
            } `}
            href={link.route}
            key={link.label}
          >
            {link.icon} <p className="text-light-1">{link.label} </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
