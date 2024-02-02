import { NavItemProps } from "@/types/types";

const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <li className="hover:text-purple-3 transition duration-200">
      <a href={href}>{children}</a>
    </li>
  );
};

export default NavItem;
