import { useEffect, useState, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = ({ field, onSelect, data, isWiped }) => {
  const [options, setOptions] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const selectorRef = useRef(null);

  useEffect(() => {
    setOptions(data);
  }, [data]);

  useEffect(() => {
    if (isWiped) {
      setSelected("");
      setInputValue("");
    }
  }, [isWiped]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={selectorRef}>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        <div>
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : `Select ${field}`}
        </div>

        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>

      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60 z-10 absolute " : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white w-full">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder={`Enter ${field}`}
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {options?.map((option) => (
          <li
            key={option?.name}
            className={`p-2 text-sm w-full hover:bg-sky-600 hover:text-white
            ${
              option?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              option?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (option?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(option?.name);
                setOpen(false);
                setInputValue("");
                onSelect(option?.name);
              }
            }}
          >
            {option?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
