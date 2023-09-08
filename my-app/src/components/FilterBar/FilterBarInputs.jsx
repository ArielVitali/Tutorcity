const FilterBarInputs = () => {
  return (
    <div className="container mx-auto">
      <ul className="grid grid-cols-1 p-4  sm:grid-cols-2  md:flex justify-center ">
        <div className="sm:px-4 md:w-full">
          <label className="label justify-center">Category</label>
          <input
            type="text"
            placeholder="Type here"
            className=" input input-bordered w-full "
          />
        </div>
        <div className="sm:px-4 md:w-full">
          <label className="label justify-center">Type</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="sm:px-4 md:w-full">
          <label className="label justify-center">Frequency</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="sm:px-4 md:w-full">
          <label className="label justify-center">Rating</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
      </ul>
      <div className="w-full h-fit flex justify-center my-4">
        <button className="btn bg-white md:btn-wide">send</button>
      </div>
    </div>
  );
};

export default FilterBarInputs;
