import { Link as ScrollLink } from "react-scroll";

export default function NavLink({ url, text }: { url: string; text: string }) {
  return (
    <ScrollLink
      to={url}
      smooth={true}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {text}
    </ScrollLink>
  );
}
