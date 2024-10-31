import { socials } from "@/lib/constant";

export default function Socials() {
  return (
    <ul className="flex z-50">
      {socials.map((item) => (
        <li key={item.path} className="mr-4">
          <a href={item.path}>
            <item.icon size={20} />
          </a>
        </li>
      ))}
    </ul>
  );
}
