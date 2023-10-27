const Container = ({ components, bgColor }) => {
  const isArray = Array.isArray(components);

  return (
    <div
      className={`grid grid-cols-1 w-full p-4 my-4 rounded-lg ${
        bgColor ? bgColor : "bg-[#e1e8ea]"
      } ${isArray ? "md:flex-col" : ""}}`}
    >
      {isArray
        ? components.map((component, index) => (
            <div key={index} className="md:w-full md:mb-4">
              {component}
            </div>
          ))
        : components}
    </div>
  );
};

export default Container;
