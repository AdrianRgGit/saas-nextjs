import { Grip } from "lucide-react";
import React from "react";
import NavItem from "./NavItem/NavItem";
import Avatar from "./Avatar/Avatar";

const SideNav = () => {
  return (
    <nav className="flex w-32 flex-col justify-between rounded-xl bg-purple-3 p-4 text-white-1">
      <img src="/images/logo.jpg" alt="logo" />
      <ul className="flex flex-col items-center justify-center gap-y-12">
        <NavItem>
          {{
            href: "#",
            icon: <Grip />,
          }}
        </NavItem>

        <NavItem>
          {{
            href: "#",
            icon: <Grip />,
          }}
        </NavItem>

        <NavItem>
          {{
            href: "#",
            icon: <Grip />,
          }}
        </NavItem>

        <NavItem>
          {{
            href: "#",
            icon: <Grip />,
          }}
        </NavItem>

        <NavItem>
          {{
            href: "#",
            icon: <Grip />,
          }}
        </NavItem>
      </ul>

      <footer>
        <Avatar />
      </footer>
    </nav>
  );
};

export default SideNav;
