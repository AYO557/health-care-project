import React from "react";
import PageHeader from "../../components/page-header";
import SpecialistCard from "../components/specialist-card";
import { specialists } from "../libs/constants";
import FilterBar from "../components/filter-bar";
import FilterModal from "../components/filter-modal";

export interface SpecialistsFilter {
  specialties: (string | number | boolean)[];
  issues: (string | number | boolean)[];
}

const SpecialistsPage: React.FC = () => {
  const [isFilterModalOpen, setFilterModalOpen] = React.useState(false);
  const [searchedSpecialists, setSearchedSpecialists] = React.useState<
    typeof specialists
  >([]);
  const [filteredSpecialists, setFilteredSpecialists] = React.useState<
    typeof specialists
  >([]);

  const handleApplyFilter = (selectedFilters: SpecialistsFilter) => {
    console.log("filter applied!:", selectedFilters);
  };

  const handleSpecilistsSearch = (searchQuery: string) => {
    const searchResults = specialists.filter((s) => {
      return s.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setSearchedSpecialists(searchResults);
  };

  return (
    <>
      <PageHeader
        title="Specialists"
        desc="Find the best specialists for yourself, your family, and your friends."
      />

      <FilterBar
        setFilterModalOpen={setFilterModalOpen}
        onSearch={handleSpecilistsSearch}
      />

      <main className="bg-white/20 overflow-y-auto rounded-2xl xl:p-8 lg:p-6 md:p-4 p-3 grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 auto-rows-min">
        {(searchedSpecialists.length ? searchedSpecialists : specialists).map(
          (specialist) => (
            <SpecialistCard key={specialist.id} {...specialist} />
          )
        )}
      </main>

      <FilterModal
        onApplyFilter={handleApplyFilter}
        isFilterModalOpen={isFilterModalOpen}
        setFilterModalOpen={setFilterModalOpen}
      />
    </>
  );
};

export default SpecialistsPage;
