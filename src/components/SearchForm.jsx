"use client";

import React, { useState } from "react";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="flex flex-wrap gap-5 justify-between px-5 py-2.5 mt-8 text-base rounded-lg border border-solid border-slate-200 max-md:max-w-full">
      {/* Input for Search*/}
      <input
        type="text"
        placeholder="Search by condition, treatment, or location"
        className="my-auto text-neutral-400 bg-transparent outline-none flex-grow"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* Button for Search*/}
      <button
        className="px-6 py-2 text-center text-white whitespace-nowrap bg-indigo-700 rounded-md max-md:px-5"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;