import FormLabel from "../../components/Form/formLabel.jsx";
import Button from "../../components/Button/Button.jsx";
import Form from "../../components/Form/index.jsx";
import Selector from "../../components/Form/formSelector.jsx";
import { useState, useEffect } from "react";
import { useWipe } from "../../context/WipeContextProvider/WipeContext.jsx";
import { getCategories } from "../../api/apiDataSource.js";

const FilterBarForm = ({ updateSelectedOptions }) => {
  const { wipe } = useWipe();
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
    wipe();
  };

  useEffect(() => {
    // Trigger form submission whenever selectedOptions change
    updateSelectedOptions(selectedOptions);
  }, [selectedOptions]);

  const content = [
    <ul
      key={"inputs"}
      className="grid grid-cols-1 p-4  sm:grid-cols-2  lg:flex md:w-full justify-center"
    >
      <div key={"category"} className="sm:px-4 md:w-full">
        <FormLabel text="Category" styles={"label justify-center"} />
        <Selector
          field={"category"}
          onSelect={(value) => handleOptionChange("category", value)}
          data={categories}
        />
      </div>
      <div key={"type"} className="sm:px-4 md:w-full">
        <FormLabel text="Type" styles={"label justify-center"} />
        <Selector
          field={"type"}
          onSelect={(value) => handleOptionChange("type", value)}
          data={[{ name: "Private" }, { name: "Group" }, { name: "Public" }]}
        />
      </div>
      <div key={"frequency"} className="sm:px-4 md:w-full">
        <FormLabel text="Frequency" styles={"label justify-center"} />
        <Selector
          field={"frequency"}
          onSelect={(value) => handleOptionChange("frequency", value)}
          data={[{ name: "Daily" }, { name: "Weekly" }, { name: "Monthly" }]}
        />
      </div>
      <div key={"rating"} className="sm:px-4 md:w-full">
        <FormLabel text="Rating" styles={"label justify-center"} />
        <Selector
          field={"rating"}
          onSelect={(value) => handleOptionChange("rating", value)}
          data={[{ name: "Ascendent" }, { name: "Descendent" }]}
        />
      </div>
    </ul>,
    <div
      key={"filter button"}
      className="w-full h-fit flex justify-center my-4"
    >
      <Button
        type={"submit"}
        text={"wipe"}
        styles={"btn bg-white md:btn-wide"}
        onClick={handleWipe}
      />
    </div>,
  ];

  const styles = "mx-auto w-full z-0 ";

  return <Form content={content} styles={styles} />;
};

export default FilterBarForm;
