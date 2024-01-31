import { NavItemProps } from "@/types/types";

const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
};

export default NavItem;
