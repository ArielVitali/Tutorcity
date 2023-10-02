const index = ({ title, items }) => {
  return (
    <div className="md:w-full items-center">
      <div className="w-full flex justify-between">
        {items.map((item, index) => (
          <div key={index} className="flex items-center m-4">
            {item.element}
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default index;
