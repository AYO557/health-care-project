import CheckDropdown from "@/components/ui/check-dropdown";
import Modal from "@/components/ui/modal";
import React from "react";
import {
  experiences,
  issues,
  locations,
  ratings,
  specialties,
} from "../libs/constants";
import Button from "@/components/ui/button";
import type { SpecialistsFilter } from "../pages/specialists-dashboard";

interface FilterModalProps {
  isFilterModalOpen: boolean;
  setFilterModalOpen: (open: boolean) => void;
  onApplyFilter: (selectedOptions: SpecialistsFilter) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isFilterModalOpen,
  setFilterModalOpen,
  onApplyFilter,
}) => {
  const [selectedFilters, setSelectedFilters] =
    React.useState<SpecialistsFilter>({
      specialties: [],
      issues: [],
    });

  return (
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
            options={specialties}
            onSelect={(selectedOptions) => {
              setSelectedFilters((prev) => ({
                ...prev,
                specialties: selectedOptions,
              }));
            }}
          />
          <CheckDropdown
            label="Issues"
            options={issues}
            onSelect={(selectedOptions) => {
              setSelectedFilters((prev) => ({
                ...prev,
                issues: selectedOptions,
              }));
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <CheckDropdown label="Location" options={locations} />
          <CheckDropdown label="Experience" options={experiences} />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm text-darkgreen/80">Rating</h3>

          <div className="grid grid-cols-2 gap-2">
            <CheckDropdown label="From" options={ratings} />
            <CheckDropdown label="To" options={ratings} />
          </div>
        </div>

        <div className="flex justify-end w-fit">
          <Button
            onClick={() => onApplyFilter(selectedFilters)}
            variant="contained"
            text="Apply"
          />
        </div>
      </article>
    </Modal>
  );
};

export default FilterModal;
