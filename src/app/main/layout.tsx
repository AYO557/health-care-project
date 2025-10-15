import React from "react";
import NavBar from "./components/nav-bar";
import Logo from "@/components/ui/logo";
import { Logs } from "lucide-react";

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

      <main className="col-span-5 h-full overflow-y-auto"></main>
    </div>
  );
};

export default MainLayout;
