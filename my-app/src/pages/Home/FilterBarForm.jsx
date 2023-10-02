import FormInput from "../../components/Form/formInput.jsx";
import FormLabel from "../../components/Form/formLabel.jsx";
import Button from "../../components/Button/Button.jsx";
import Form from "../../components/Form/index.jsx";
import Selector from "../../components/Form/formSelector.jsx";

const FilterBarForm = () => {
  const content = [
    <ul
      key={"inputs"}
      className="grid grid-cols-1 p-4  sm:grid-cols-2  md:flex justify-center"
    >
      <div key={"category"} className="sm:px-4 md:w-full">
        <FormLabel text="Category" styles={"label justify-center"} />
        <Selector />
        {/* <FormInput
          type="password"
          name={"category"}
          styles={"input input-bordered w-full"}
          placeholder="Type here"
        /> */}
      </div>
      <div key={"type"} className="sm:px-4 md:w-full">
        <FormLabel text="Type" styles={"label justify-center"} />
        <FormInput
          type="text"
          name={"type"}
          styles={"input input-bordered w-full"}
          placeholder="Type here"
        />
      </div>
      <div key={"frequency"} className="sm:px-4 md:w-full">
        <FormLabel text="Frequency" styles={"label justify-center"} />
        <FormInput
          type="text"
          name={"frequency"}
          styles={"input input-bordered w-full"}
          placeholder="Type here"
        />
      </div>
      <div key={"rating"} className="sm:px-4 md:w-full">
        <FormLabel text="Rating" styles={"label justify-center"} />
        <FormInput
          type="text"
          name={"rating"}
          styles={"input input-bordered w-full"}
          placeholder="Type here"
        />
      </div>
    </ul>,
    <div
      key={"filter button"}
      className="w-full h-fit flex justify-center my-4"
    >
      <Button
        type={"submit"}
        text={"send"}
        styles={"btn bg-white md:btn-wide"}
      />
    </div>,
  ];

  const styles = "container mx-auto";

  return <Form content={content} styles={styles} />;
};

export default FilterBarForm;
