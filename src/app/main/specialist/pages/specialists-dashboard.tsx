import React from "react";
import PageHeader from "../../components/page-header";
import SpecialistCard from "../components/specialist-card";
import { specialists } from "../libs/constants";
import Modal from "@/components/ui/modal/modal";
import FilterBar from "../components/filter-bar";
import CheckDropdown from "@/components/ui/check-dropdown";

const SpecialistsPage: React.FC = () => {
  const [isFilterModalOpen, setFilterModalOpen] = React.useState(false);

  return (
    <>
      <PageHeader
        title="Specialists"
        desc="Find the best specialists for yourself, your family, and your friends."
      />

      <FilterBar setFilterModalOpen={setFilterModalOpen} />

      <main className="bg-white/20 overflow-y-auto rounded-2xl xl:p-8 lg:p-6 md:p-4 p-3 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 auto-rows-min">
        {specialists.slice(0, 8).map((specialist) => (
          <SpecialistCard key={specialist.id} {...specialist} />
        ))}
      </main>

      <Modal
        isOpen={isFilterModalOpen}
        title="Filter Specialists"
        onClose={() => {
          setFilterModalOpen(false);
        }}
      >
        <article className="space-y-4 min-w-[400px]">
          <div className="grid grid-cols-2 gap-2">
            <CheckDropdown
              label="Specialty"
              options={[
                {
                  label: "Cardiologist",
                  value: "cardiologist",
                },
                {
                  label: "Dermatologist",
                  value: "dermatologist",
                },
                {
                  label: "Endocrinologist",
                  value: "endocrinologist",
                },
              ]}
            />
            <CheckDropdown
              label="Location"
              options={[
                {
                  label: "Nigeria",
                  value: "nigeria",
                },
                {
                  label: "Ghana",
                  value: "ghana",
                },
                {
                  label: "Kenya",
                  value: "kenya",
                },
              ]}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {/* <CheckDropdown />
            <CheckDropdown /> */}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {/* <CheckDropdown />
            <CheckDropdown /> */}
          </div>
        </article>
      </Modal>
    </>
  );
};

export default SpecialistsPage;
