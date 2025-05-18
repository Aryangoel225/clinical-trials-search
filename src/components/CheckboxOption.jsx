"use client";

import React, { useState } from "react";

// A simple checkbox component that takes a label as a prop
const CheckboxOption = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false); // Track if the box is checked

  // Toggle the checked state when the box is clicked
  const toggleCheck = (e) => {
    e.preventDefault(); // Prevent form submission if inside a <form>
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex gap-2 mt-2 cursor-pointer">
      {/* Custom checkbox */}
      <div
        className={`flex items-center justify-center h-[15px] w-[15px] rounded-sm border border-stone-500 ${
          isChecked ? "bg-indigo-700" : "bg-white"
        }`}
        onClick={toggleCheck}
      >
        {/* Checkmark icon if checked */}
        {isChecked && (
          <svg
            viewBox="0 0 15 15"
            fill="none"
            className="w-full h-full text-white"
          >
            <path
              d="M3 7.5L6.5 11L12 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      {/* Label text next to the checkbox */}
      <span className="text-base text-black">{label}</span>
    </label>
  );
};

export default CheckboxOption;
