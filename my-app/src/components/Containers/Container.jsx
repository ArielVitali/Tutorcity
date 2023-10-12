import React from "react";

const Container = ({ component, bgColor }) => {
  const isArray = Array.isArray(component);
  console.log("color", bgColor);
  return (
    <div
      className={`grid grid-cols-1 w-full p-4 my-4 rounded-lg ${
        bgColor ? bgColor : "bg-[#e1e8ea]"
      } ${isArray ? "md:flex-col" : ""}}`}
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
