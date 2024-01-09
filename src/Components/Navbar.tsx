import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const navLinks = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/projects",
    text: "Projects",
  },
  {
    url: "/contact",
    text: "Contact",
  },
];
export default function Navbar() {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link to="" className="text-5xl text-white font-semibold">
          LOGO
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink url={link.url} text={link.text} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
