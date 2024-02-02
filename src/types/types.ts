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

// NOTE: SUMMARY BUTTON PROPS
export interface SummaryButtonProps {
  bgColor: string;
  textColor: string;
  children: ReactNode;
}

// NOTE: SUMMARY CARD PROPS

export interface SummaryCardProps {
  title: string;
  number: string;
  bgColor: string;
  textColor: string;
  icon: ReactNode;
  label: ReactNode;
}

// NOTE: DATA USER
export interface Data {
  bills: number;
  capital: number;
  monthly_expenses: number[];
  name: string;
  number: string;
  avatar: string;
}
