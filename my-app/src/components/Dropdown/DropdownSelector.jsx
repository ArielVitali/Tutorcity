import React from "react";
import { useState, useEffect } from "react";

const DropdownSelector = ({
  status,
  onStatusChange,
  optionStyles,
  options,
}) => {
  const [bgColor, setBgColor] = useState(""); // State to store the background color

  useEffect(() => {
    // Set the initial background color based on the incoming status prop
    setBgColor(optionStyles[status]);
  }, [status]);

  // Function to handle option change and set background color
  const handleStatusChange = (newStatus) => {
    onStatusChange(newStatus); // Call the parent component's function
    setBgColor(optionStyles[newStatus]); // Set the background color based on the selected option
  };

  return (
    <div>
      <select
        className={`select select-ghost max-w-xs ${bgColor}`}
        value={status}
        onChange={(e) => handleStatusChange(e.target.value)}
      >
        {options.map((option) => option.src)}
      </select>
    </div>
  );
};

export default DropdownSelector;
