import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="h-screen lg:flex">
      <section className="h-full w-1/2 bg-darkgreen lg:inline-block hidden">
        <div className="flex flex-col justify-center items-center gap-2 h-full px-20">
          <h1 className="text-white text-4xl font-bold">Health Care App</h1>
          <p className="text-white text-sm">Your health is our priority</p>
        </div>
      </section>

      <section className="h-full lg:w-1/2 w-full bg-lightgreen/50 flex justify-center items-center overflow-y-auto py-20">
        <div className="w-full px-8 lg:w-1/2 lg:min-w-[400px] space-y-2 max-h-screen">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default AuthLayout;
