import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex items-center gap-2">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          checked={selectedGender === "male"}
          onChange={() => onCheckboxChange("male")}
          type="checkbox"
          className="appearance-none h-4 w-4 border border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent"
        />
        <span className="text-slate-700">Male</span>
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          checked={selectedGender === "female"}
          onChange={() => onCheckboxChange("female")}
          type="checkbox"
          className="appearance-none h-4 w-4 border border-gray-300 rounded-md checked:bg-pink-500 checked:border-transparent"
        />
        <span className="text-slate-700">Female</span>
      </label>
    </div>
  );
};

export default GenderCheckbox;
