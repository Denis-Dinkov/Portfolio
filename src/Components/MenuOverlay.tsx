import NavLink from "./NavLink"; // Import the NavLink component

export default function MenuOverlay({
  links,
}: {
  links: Array<{ url: string; text: string }>;
}) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink url={link.url} text={link.text} />
        </li>
      ))}
    </ul>
  );
}
