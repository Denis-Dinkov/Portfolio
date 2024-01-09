import { Link } from "react-router-dom";
export default function NavLink({ url, text }: { url: string; text: string }) {
  return (
    <Link
      to={url}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {text}
    </Link>
  );
}
