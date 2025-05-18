"use client";

import React from "react";

// Functional component receiving props object
const FilterButton = (props) => {
  return (
    <button
      className="flex gap-2 self-start px-4 py-2.5 mt-6 text-base text-center text-black whitespace-nowrap rounded-md border border-solid border-slate-200"
      onClick={props.onClick} // Use onClick passed in props
    >
      <span className="grow">Filters</span>
      <svg
        className="object-contain shrink-0 my-auto w-5 aspect-square"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 10H15M2.5 5H17.5M7.5 15H12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default FilterButton;
