import React from "react";
import CheckboxOption from "./CheckboxOption"; // Import a custom checkbox component

// Functional component for the filter panel UI
const FilterPanel = () => {
  return (
    <section className="py-6 pr-20 pl-6 mt-4 bg-white rounded-lg shadow-[0px_4px_6px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
      {/* Container with columns (rows on small screens) */}
      <div className="flex gap-5 max-md:flex-col">
        
        {/* First column: Trial Phases */}
        <div className="w-[31%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full text-base text-black max-md:mt-10">
            <h3 className="self-start font-semibold">Phase</h3>
            <CheckboxOption label="Phase 1" />
            <CheckboxOption label="Phase 2" />
            <CheckboxOption label="Phase 3" />
          </div>
        </div>

        {/* Second column: Trial Status */}
        <div className="ml-5 w-2/5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full text-base text-black whitespace-nowrap max-md:mt-10">
            <h3 className="self-start font-semibold">Status</h3>
            <CheckboxOption label="Recruiting" />
            <CheckboxOption label="Active" />
            <CheckboxOption label="Completed" />
          </div>
        </div>

        {/* Third column: Location */}
        <div className="ml-5 w-[29%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full text-base text-black whitespace-nowrap max-md:mt-10">
            <h3 className="font-semibold">Location</h3>
            <CheckboxOption label="USA" />
            <CheckboxOption label="Europe" />
            <CheckboxOption label="Asia" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterPanel;
