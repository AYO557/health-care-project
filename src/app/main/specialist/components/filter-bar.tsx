import Button from "@/components/ui/button";
import FormInput from "@/components/ui/input";
import { ArrowDownUp, Search, SlidersHorizontal } from "lucide-react";
import React from "react";

interface FilterBarProps {
  setFilterModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterBar: React.FC<FilterBarProps> = ({ setFilterModalOpen }) => {
  return (
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
  );
};

export default FilterBar;
