import { useState } from "react";
import { NAV_LINKS } from "../../constants";
import { useScrolled } from "../../hooks/useScrolled";
import { useScrollTo } from "../../hooks/useScrollTo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(40);
  const scrollTo = useScrollTo();

  const handleNav = (link) => {
    scrollTo(link.toLowerCase().replace(" ", ""));
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop nav */}
      <nav className={`fixed top-0 left-0 right-0 z-[1000] px-10 h-16 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#222]" : ""
      }`}>
        <div className="font-bebas text-2xl tracking-widest text-[#e8e8e8]">
          32<span className="text-[#ff2d55]">BITS</span>
        </div>

        <ul className="hidden md:flex gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                onClick={() => handleNav(link)}
                className="font-mono text-[0.65rem] tracking-[0.15em] text-[#666] hover:text-[#ff2d55] cursor-pointer transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:block font-mono text-[0.65rem] tracking-[0.12em] border border-[#ff2d55] text-[#ff2d55] px-4 py-2 hover:bg-[#ff2d55] hover:text-black transition-all duration-200 cursor-pointer bg-transparent"
        >
          SEND MESSAGE
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
        >
          <span className="block w-6 h-[2px] bg-[#e8e8e8]" />
          <span className="block w-6 h-[2px] bg-[#e8e8e8]" />
          <span className="block w-6 h-[2px] bg-[#e8e8e8]" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-[999] bg-[#080808]/98 flex-col items-center justify-center gap-8 ${menuOpen ? "flex" : "hidden"}`}>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 bg-transparent border-none text-[#e8e8e8] text-2xl cursor-pointer"
        >
          ✕
        </button>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            onClick={() => handleNav(link)}
            className="font-bebas text-5xl text-[#e8e8e8] hover:text-[#ff2d55] tracking-widest cursor-pointer transition-colors duration-200"
          >
            {link}
          </a>
        ))}
      </div>
    </>
  );
}
