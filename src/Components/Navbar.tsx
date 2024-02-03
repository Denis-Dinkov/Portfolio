import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    url: "about",
    text: "About",
  },
  {
    url: "projects",
    text: "Projects",
  },
  {
    url: "contact",
    text: "Contact",
  },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <ScrollLink
          to="hero-section"
          smooth={true}
          offset={-100}
          className="text-1xl md:text-4xl text-white font-semibold cursor-pointer"
        >
          Portfolio
        </ScrollLink>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
                  to={link.url}
                  smooth={true}
                  offset={-80}
                >
                  {link.text}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}
