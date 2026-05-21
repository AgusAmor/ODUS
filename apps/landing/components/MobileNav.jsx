"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MdOutlineHome,
  MdHome,
  MdOutlineLocationOn,
  MdLocationOn,
  MdOutlineCalendarMonth,
  MdCalendarMonth,
  MdOutlinePerson,
  MdPerson,
} from "react-icons/md";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Inicio",
      href: "/",
      iconOutline: MdOutlineHome,
      iconFilled: MdHome,
    },
    {
      name: "Sedes",
      href: "/centers",
      iconOutline: MdOutlineLocationOn,
      iconFilled: MdLocationOn,
    },
    {
      name: "Turnos",
      href: "#",
      iconOutline: MdOutlineCalendarMonth,
      iconFilled: MdCalendarMonth,
    },
    {
      name: "Perfil",
      href: "#",
      iconOutline: MdOutlinePerson,
      iconFilled: MdPerson,
    },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-xl fixed bottom-0 left-0 right-0 w-full z-50 md:hidden border-t border-neutral/20 shadow-[0_-4px_12px_rgba(11,59,140,0.06)]">
      <div className="flex justify-around items-center px-4 py-3 w-full max-w-lg mx-auto">
        {navItems.map((item, idx) => {
          const isActive = pathname === item.href;
          const Icon = isActive ? item.iconFilled : item.iconOutline;

          return (
            <Link
              key={idx}
              href={item.href}
              className={`flex flex-col items-center justify-center scale-90 active:scale-100 transition-all duration-200 rounded-xl px-4 py-1 cursor-pointer ${
                isActive
                  ? "text-primary font-semibold"
                  : "text-neutral hover:text-primary"
              }`}
            >
              <Icon size={24} />
              <span className="font-label-sm text-label-sm mt-1">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
