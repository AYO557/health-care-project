import React from "react";
import PageHeader from "../../components/page-header";
import SpecialistCard from "../components/specialist-card";
import { specialists } from "../libs/constants";
import Button from "@/components/ui/button";
import { ArrowDownUp, Search, SlidersHorizontal } from "lucide-react";
import FormInput from "@/components/ui/input";
import Modal from "@/components/ui/modal/modal";

const SpecialistsPage: React.FC = () => {
  const [isFilterModalOpen, setFilterModalOpen] = React.useState(false);

  return (
    <>
      <PageHeader
        title="Specialists"
        desc="Find the best specialists for yourself, your family, and your friends."
      />

      {/* Filter bar */}
      <section className="h-20 py-2 px-4 bg-white/20 rounded-xl flex items-end justify-between">
        <div className="w-fit flex xl:gap-4 sm:gap-2 gap-1">
          <Button
            text="Filter"
            onClick={() => setFilterModalOpen(true)}
            startAdornment={<SlidersHorizontal size={20} />}
          />

          <Button text="Sort" startAdornment={<ArrowDownUp size={20} />} />
        </div>

        <div className="hidden xl:block">
          <FormInput
            type="search"
            placeholder="Search for a specialist..."
            id="search"
            icon={<Search size={20} />}
          />
        </div>
      </section>

      <main className="bg-white/20 h-[95%] overflow-y-auto rounded-2xl xl:p-8 lg:p-6 md:p-4 p-3 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 auto-rows-min">
        {specialists.slice(0, 8).map((specialist) => (
          <SpecialistCard key={specialist.id} {...specialist} />
        ))}

        <Modal
          isOpen={isFilterModalOpen}
          title="Filter Specialists"
          onClose={() => {
            setFilterModalOpen(false);
          }}
        >
          <p>Filter Specialists</p>
        </Modal>
      </main>
    </>
  );
};

export default SpecialistsPage;
