import { ImSearch } from "react-icons/im";

const Empty = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-[50vh]">
        <ImSearch className="text-4xl text-gray-900" />
        <h3 className="text-center text-gray-900 text-2xl mx-2">
          No results found
        </h3>
      </div>
    </div>
  );
};

export default Empty;
