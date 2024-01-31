import { NavItemType } from "@/types/types";

const NavItem = ({ children }: { children: NavItemType }) => {
  const { href, icon } = children;
  return (
    <li>
      <a href={href}>
        {icon}
      </a>
    </li>
  );
};

export default NavItem;
