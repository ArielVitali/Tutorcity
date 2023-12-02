const LargeForm = ({
  title,
  description,
  fields,
  onSubmit,
  formData,
  setFormData,
}) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          {title}
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">{description}</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {fields.map((field) => {
            if (field.type === "textarea") {
              return (
                <div key={field.name} className="sm:col-span-full">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    {field.label}
                  </label>
                  <div className="mt-2">
                    <textarea
                      name={field.name}
                      id={field.id}
                      rows={4}
                      // Add the value and onChange attributes here
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      required
                      className="block  textarea w-full rounded-md  p-1.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              );
            } else if (field.type === "email") {
              return (
                <div key={field.name} className="sm:col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    {field.label}
                  </label>
                  <div className="mt-2">
                    <input
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      // Add the value and onChange attributes here
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      required
                      className="input block w-full rounded-md  p-1.5 text-gray-900 shadow-sm  ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              );
            } else if (field.type === "select") {
              return (
                <div key={field.name} className="sm:col-span-3">
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    {field.label}
                  </label>
                  <div className="mt-2">
                    <select
                      id={field.id}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      required
                      className="select block w-full rounded-md p-1.5 text-gray-900 shadow-sm ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    >
                      <option value="" disabled>
                        Select {field.label}
                      </option>
                      {field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={field.name} className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    {field.label}
                  </label>
                  <div className="mt-2">
                    <input
                      type={field.type}
                      name={field.name}
                      id={field.id}
                      autoComplete={field.autoComplete}
                      {...(field.type === "number" && {
                        step: field.step,
                        min: field.min,
                        max: field.max,
                      })}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      required
                      className="input block w-full rounded-md  p-1.5 text-gray-900 shadow-sm   ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="w-full flex justify-center my-4">
        <button type="submit" className="btn btn-outline ">
          submit
        </button>
      </div>
    </form>
  );
};

export default LargeForm;
