import Selector from "../../components/Form/formSelector.jsx";
import { useState, useEffect } from "react";
import { getCategories } from "../../api/apiDataSource.js";

const FilterBarForm = ({ updateSelectedOptions, isWiped, setIsWiped }) => {
  const [categories, setCategories] = useState([]);

  const [selectedOptions, setSelectedOptions] = useState({
    category: "",
    type: "",
    frequency: "",
    rating: "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleOptionChange = (field, value) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleWipe = () => {
    handleOptionChange("category", "");
    handleOptionChange("type", "");
    handleOptionChange("frequency", "");
    handleOptionChange("rating", "");
    setIsWiped(true);
  };

  useEffect(() => {
    updateSelectedOptions(selectedOptions);
  }, [selectedOptions, updateSelectedOptions]);

  useEffect(() => {
    updateSelectedOptions(selectedOptions);
  }, [selectedOptions]);

  return (
    <div>
      <form className="mx-auto w-full z-0">
        <ul
          key={"inputs"}
          className="grid grid-cols-1 p-4  sm:grid-cols-2  lg:flex md:w-full justify-center"
        >
          <div key={"category"} className="sm:px-4 md:w-full">
            <label className="label justify-center">Category</label>
            <Selector
              field={"category"}
              onSelect={(value) => handleOptionChange("category", value)}
              data={categories}
              isWiped={isWiped}
            />
          </div>
          <div key={"type"} className="sm:px-4 md:w-full">
            <label className="label justify-center">Type</label>
            <Selector
              field={"type"}
              onSelect={(value) => handleOptionChange("type", value)}
              data={[{ name: "Private" }, { name: "Group" }]}
              isWiped={isWiped}
            />
          </div>
          <div key={"frequency"} className="sm:px-4 md:w-full">
            <label className="label justify-center">Frequency</label>
            <Selector
              field={"frequency"}
              onSelect={(value) => handleOptionChange("frequency", value)}
              data={[
                { name: "One time" },
                { name: "Weekly" },
                { name: "Monthly" },
              ]}
              isWiped={isWiped}
            />
          </div>
          <div key={"rating"} className="sm:px-4 md:w-full">
            <label className="label justify-center">Rating</label>
            <Selector
              field={"rating"}
              onSelect={(value) => handleOptionChange("rating", value)}
              data={[{ name: "Ascendent" }, { name: "Descendent" }]}
              isWiped={isWiped}
            />
          </div>
        </ul>
      </form>
      <div
        key={"filter button"}
        className="w-full h-fit flex justify-center my-4"
      >
        <button className={"btn bg-white md:btn-wide"} onClick={handleWipe}>
          Wipe
        </button>
      </div>
    </div>
  );
};

export default FilterBarForm;
