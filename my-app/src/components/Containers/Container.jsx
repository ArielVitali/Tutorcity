import React from "react";

const Container = ({ component }) => {
  const isArray = Array.isArray(component);

  return (
    <div
      className={`grid grid-cols-1 w-full p-4 my-4 bg-[#EDF2F4] rounded-lg ${
        isArray ? "md:flex-col" : ""
      }`}
    >
      {isArray
        ? component.map((Component, index) => (
            <div key={index} className="md:w-full md:mb-4">
              {React.cloneElement(Component)}
            </div>
          ))
        : component()}
    </div>
  );
};

export default Container;
