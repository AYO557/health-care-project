import React from "react";
import PageHeader from "../../components/page-header";
import SpecialistCard from "../components/specialist-card";
import { specialists } from "../libs/constants";

const SpecialistsPage: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Specialists"
        desc="Find the best specialists for yourself, your family, and your friends."
      />

      {/* Filter bar */}
      <section className="h-32 bg-white/20 rounded-xl"></section>

      <main className="bg-white/20 h-[95%] overflow-y-auto rounded-2xl xl:p-8 lg:p-6 md:p-4 p-3 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 auto-rows-min">
        {specialists.slice(0, 14).map((specialist) => (
          <SpecialistCard key={specialist.id} {...specialist} />
        ))}
      </main>
    </>
  );
};

export default SpecialistsPage;
