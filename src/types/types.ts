import { ReactNode } from "react";

// NOTE: NAV ITEM PROPS
export interface NavItemProps {
  href: string;
  children: ReactNode;
}

// NOTE: PERSON CARD PROPS
export interface PersonCardProps {
  src: string;
  username: string;
  number: string;
}
