import Logo from "@/components/ui/logo";
import {
  Calendar,
  ClipboardPlus,
  Home,
  Mails,
  Settings2,
  Store,
  User,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const navItems = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: Home,
  },
  {
    name: "Specialists",
    link: "/specialists",
    icon: User,
  },
  {
    name: "Appointments",
    link: "/appointments",
    icon: Calendar,
  },
  {
    name: "Pharmacy",
    link: "/pharmacy",
    icon: Store,
  },
  {
    name: "Reports",
    link: "/reports",
    icon: ClipboardPlus,
  },
  {
    name: "Messages",
    link: "/messages",
    icon: Mails,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: Settings2,
  },
];

const NavBar: React.FC = () => {
  return (
    <nav className="h-full xl:rounded-3xl lg:rounded-xl bg-darkgreen text-white flex justify-between flex-col items-center xl:py-5 py-2 xl:px-4 px-2">
      <div className="p-4 w-full">
        <Logo />
      </div>

      <menu className="flex flex-col gap-2 2xl:text-xl text-sm lg:w-full">
        {navItems.map((item) => (
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              `flex gap-4 items-center 2xl:h-14 xl:h-10 lg:h-8 lg:pl-4 p-4 rounded-xl  ${
                isActive ? "bg-darkgraygreen" : "hover:bg-darkgraygreen/40"
              }`
            }
            key={item.name}
          >
            <item.icon className="2xl:size-6 lg:size-4 sm:size-8" />
            <span className="hidden lg:inline-block">{item.name}</span>
          </NavLink>
        ))}
      </menu>

      <div className="2xl:h-40 lg:h-24 bg-darkgraygreen w-full rounded-2xl"></div>
    </nav>
  );
};

export default NavBar;
