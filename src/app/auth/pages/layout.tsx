import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="min-h-screen flex flex-col md:flex-row xl:bg-lightgreen/50 lg:bg-darkgreen bg-lightgreen/50">
      {/* Left section (hidden on small screens) */}
      <section className="hidden xl:flex xl:w-2/5 bg-darkgreen justify-center items-center p-12 text-center">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-white text-4xl font-bold tracking-tight">
            Health Care App
          </h1>
          <p className="text-white text-sm opacity-80">
            Your health is our priority
          </p>
        </div>
      </section>

      {/* Right section (form container) */}
      <section className="flex-1 flex justify-center items-center py-12 overflow-y-auto">
        <div className="w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
          <div className="mx-auto w-full max-w-[min(90%,450px)] lg:bg-green-100 xl:bg-transparent lg:backdrop-blur-sm xl:backdrop-blur-none rounded-2xl lg:shadow-md xl:shadow-none p-8 space-y-6">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
