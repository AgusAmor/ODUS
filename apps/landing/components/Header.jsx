"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Primero redirige a la nueva página sin alterar el scroll
      router.push(href, { scroll: false });

      // Le da a Next.js un instante para montar el nuevo DOM y luego sube suavemente
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 150);
    }
  };

  // Cierra el menú móvil automáticamente al redimensionar la ventana a tamaño desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Especialidades", href: "/specialties" },
    { name: "Sedes", href: "/centers" },
    { name: "Nosotros", href: "/about" },
  ];

  return (
    <>
      <nav className="bg-tertiary/70 backdrop-blur-xl w-full top-0 sticky z-50 border-b border-neutral/20 shadow-sm">
        <div className="flex justify-between items-center w-full px-6 md:px-10 py-4 max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="font-heading text-2xl font-extrabold text-primary flex items-center gap-2">
            <Link
              href="/"
              onClick={(e) => handleNavigation(e, "/")}
              className="flex items-center gap-2"
            >
              <Logo className="w-auto h-7 md:h-8 text-primary hover:text-secondary transition-colors duration-300" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-8 items-center text-sm font-bold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavigation(e, link.href)}
                    className={`px-3 py-2 transition-colors rounded-lg ${
                      isActive
                        ? "text-primary border-b-2 border-primary pb-1 rounded-b-none"
                        : "text-neutral hover:text-primary hover:bg-secondary/20"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/5491128331920"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-tertiary px-6 py-2.5 rounded-2xl text-sm font-bold hover:scale-95 transition-transform shadow-sm cursor-pointer text-center inline-block"
            >
              Agendar turno
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-end w-10 h-10 gap-1.5 relative z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Alternar menú"
          >
            <span
              className={`block w-7 h-0.5 bg-neutral transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "rotate-45 translate-y-2 bg-primary" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-neutral transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "opacity-0 w-7" : "w-5"
              }`}
            />
            <span
              className={`block w-7 h-0.5 bg-neutral transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2 bg-primary" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-15 bg-tertiary/95 backdrop-blur-2xl z-40 md:hidden flex flex-col pt-8 px-8 gap-8 transition-all duration-300 ease-in-out border-t border-neutral/10 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-6 mt-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className={`text-2xl font-extrabold transition-colors block ${
                    isActive
                      ? "text-primary"
                      : "text-neutral hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 border-t border-neutral/20 pt-8 flex flex-col gap-4">
          <a
            href="https://wa.me/5491128331920"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-tertiary px-8 py-4 rounded-2xl text-lg font-bold hover:scale-95 active:scale-95 transition-transform shadow-sm text-center flex items-center justify-center gap-2"
          >
            Agendar turno
          </a>
          <p className="text-center text-neutral/60 font-label-sm text-xs mt-2">
            Comunícate directamente con nuestro equipo.
          </p>
        </div>
      </div>
    </>
  );
}
