"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex bottom-0 z-20 w-full bg-dark-1 px-6 py-3 items-center justify-between md:hidden">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            className={`flex gap-2 items-center rounded-lg px-4 py-2 ${
              isActive && "bg-purple-1"
            } `}
            href={link.route}
            key={link.label}
          >
            {link.icon}
            <p className="text-light-1 text-subtle-medium max-sm:hidden">
              {link.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
