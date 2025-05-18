"use client"; // allows for browser-only features

import React, { useState } from "react"; 
import SearchHeader from "./SearchHeader";
import SearchForm from "./SearchForm";
import FilterButton from "./FilterButton";
import FilterPanel from "./FilterPanel";

const ClinicalTrialsSearch = () => {
// useState creates a state variable 'showFilters' to add functionality to fitlers
  const [showFilters, setShowFilters] = useState(false); 

// function to toggle the value of showFilters
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <main className="overflow-hidden bg-white">
      <div className="flex flex-col pb-80 w-full bg-slate-50 max-md:pb-24 max-md:max-w-full">
        <SearchHeader />

        <div className="flex flex-col self-center mt-8 mb-0 max-w-full w-[800px] max-md:mb-2.5">
          <h1 className="self-center text-3xl font-bold text-center text-slate-800">
            Find Clinical Trials
          </h1>

          <p className="self-center mt-4 text-lg text-center text-slate-500 max-md:max-w-full">
            Search through thousands of clinical trials to find the right one for you
          </p>

          <SearchForm />

          <FilterButton onClick={toggleFilters} />

          {showFilters && <FilterPanel />}
        </div>
      </div>
    </main>
  );
};

export default ClinicalTrialsSearch;
