import React from "react";
import NavBar from "./components/nav-bar";
import Logo from "@/components/ui/logo";
import { Logs } from "lucide-react";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <div className="relative sm:grid grid-cols-6 bg-darkgraygreen/50 h-screen sm:h-auto">
      {/* Mobile */}
      <div className="absolute w-full sm:hidden h-[7vh] bg-darkgreen flex justify-between items-center text-white px-2">
        <Logo />

        <Logs />
      </div>
      {/* Desktop */}
      <div className="col-span-1 h-screen xl:py-5 lg:py-2 xl:pl-5 lg:pl-2 hidden sm:block">
        <NavBar />
      </div>

      <main className="col-span-5 h-full overflow-y-auto 2xl:p-10 xl:p-8 lg:p-4">
        <div className="h-full p-4 space-y-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
