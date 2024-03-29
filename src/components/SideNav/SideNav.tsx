"use client";
import {
  BarChart,
  Grip,
  Lightbulb,
  LogOut,
  Settings,
  UsersIcon,
} from "lucide-react";
import React from "react";
import NavItem from "./NavItem/NavItem";
import Avatar from "./AvatarImage/AvatarImage";

const SideNav = () => {
  return (
    <nav className="flex w-32 flex-col items-center justify-between rounded-xl bg-purple-4 p-4 text-white-1">
      <img src="/images/logo.jpg" alt="logo" />
      <ul className="flex flex-col justify-center gap-y-12">
        <NavItem href="#">
          <Grip />
        </NavItem>

        <NavItem href="#">
          <UsersIcon />
        </NavItem>

        <NavItem href="#">
          <BarChart />
        </NavItem>

        <NavItem href="#">
          <Settings />
        </NavItem>

        <NavItem href="#">
          <Lightbulb />
        </NavItem>
      </ul>

      <footer className="flex flex-col items-center gap-y-4">
        <Avatar />
        <button className="transition duration-200 hover:text-purple-3">
          <LogOut />
        </button>
      </footer>
    </nav>
  );
};

export default SideNav;
