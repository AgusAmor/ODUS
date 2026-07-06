"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdAccountCircle } from "react-icons/md";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Especialidades", href: "/specialties" },
    { name: "Sedes", href: "/centers" },
    { name: "Nosotros", href: "/about" },
  ];

  return (
    <nav className="bg-tertiary/70 backdrop-blur-xl w-full top-0 sticky z-50 border-b border-neutral/20 shadow-sm hidden md:block">
      <div className="flex justify-between items-center w-full px-10 py-4 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="font-heading text-2xl font-extrabold text-primary flex items-center gap-2">
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2"
          >
            <Logo className="w-auto h-8 text-primary hover:text-secondary transition-colors duration-300" />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 items-center text-sm font-bold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => {
                    if (pathname === link.href) {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`px-3 py-2 transition-colors rounded-lg ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1 rounded-b-none"
                      : "text-neutral hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5491128331920"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-tertiary px-6 py-2.5 rounded-2xl text-sm font-bold hover:scale-95 transition-transform shadow-sm cursor-pointer text-center inline-block"
          >
            Agendar turno
          </a>
          {/* <button className="text-neutral hover:bg-primary/10 rounded-full p-2 transition-colors flex items-center justify-center cursor-pointer">
            <MdAccountCircle size={28} />
          </button> */}
        </div>
      </div>
    </nav>
  );
}
