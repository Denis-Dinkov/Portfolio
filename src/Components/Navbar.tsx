import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p8">
        <Link to={"/"} className="text-5xl text-white font-semibold">
          Logo
        </Link>
        <div className="menu"></div>
      </div>
    </nav>
  );
}
