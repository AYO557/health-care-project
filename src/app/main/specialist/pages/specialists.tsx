import React from "react";
import PageHeader from "../../components/page-header";
import Button from "@/components/ui/button";

const SpecialistsPage: React.FC = () => {
  const issuses = [
    "Heart Attack",
    "Stroke",
    "Cancer",
    "Diabetes",
    "Hypertension",
    "Asthma",
    "Arthritis",
    "Back Pain",
    "Depression",
    "Anxiety",
  ];

  return (
    <>
      <PageHeader
        title="Specialists"
        desc="Find the best specialists for yourself, your family, and your friends."
      />

      <main className="bg-white/40 h-[95%] rounded-2xl xl:p-8 sm:p-4 p-2 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 xl:gap-6 auto-rows-min">
        <div className="h-64 w-full rounded-xl bg-white space-y-4 px-2 py-4">
          <div className="h-[60%] flex">
            <div className="w-[30%] h-full flex justify-center">
              <div className="size-14 bg-blue-100 rounded-full"></div>
            </div>
            <div className="w-[70%] h-full flex flex-col justify-between">
              <div className="space-y-1">
                <h1 className="text-xl font-bold">Dr. John Doe</h1>
                <p className="text-sm text-darkgreen/70">Cardiologist</p>
              </div>

              <p className="text-sm font-medium">Lorem ipsum dolor sit.</p>

              <p className="text-sm text-darkgreen/70 italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="h-[40%] flex flex-col justify-between px-4 py-2">
            <div className="flex gap-1">
              {issuses.slice(0, 3).map((issue, index) => (
                <div
                  key={index}
                  className="rounded-2xl w-fit bg-darkgreen/70 px-4 py-1 text-xs text-white"
                >
                  {issue.length > 7 ? issue.slice(0, 7) + "..." : issue}
                </div>
              ))}
              {issuses.length > 3 && (
                <div className="rounded-2xl w-fit bg-darkgreen/70 px-4 py-1 text-xs text-white">
                  +{issuses.length - 3}
                </div>
              )}
            </div>

            <div className="flex justify-between items-center flex-1">
              <p className="text-sm text-darkgreen/70">5.0</p>

              <div>
                <button className="bg-darkgraygreen text-xs h-[30px] px-4 rounded-lg text-white">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SpecialistsPage;
