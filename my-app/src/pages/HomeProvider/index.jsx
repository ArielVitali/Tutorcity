import { useState } from "react";
import { PiGraduationCapDuotone, PiArrowRightDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import HomeContent from "./HomeContent";
import { Menus } from "../../components/NavBar/SideMenu.jsx";

const index = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <div
        id="sidebar"
        className={` ${
          open ? "w-72" : "w-20"
        } hidden lg:block bg-green-200 h-screen p-5  pt-8 relative duration-300 `}
      >
        <PiArrowRightDuotone
          src="./src/assets/control.png"
          className={`absolute text-3xl cursor-pointer -right-3 top-9 w-7 bg-red-200 
             border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div
          className={`flex gap-x-4 items-center duration-500 pt-9 ${
            open ? "justify-center duration-500" : ""
          }`}
        >
          <div className="cursor-pointer duration-500 flex rounded-md p-1 bg-white">
            <PiGraduationCapDuotone
              id="logo"
              className="text-3xl cursor-pointer duration-500  "
            />
          </div>

          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            TutorCity
          </h1>
        </div>
        <div className="divider"></div>
        <ul>
          {Menus.map((Menu, index) => (
            <Link key={index} to={Menu.to}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white bg-white  text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                {Menu.src}
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <div className="w-full my-2 sm:flex sm:justify-between sm:items-center my-4">
          <div className="w-full flex justify-center md:w-fit">
            <h3 className="md:text-5xl">Bienvenida Ana</h3>
          </div>
          <div className="w-full my-4 flex justify-center md:w-fit">
            <button className="btn btn-sm  md:btn-md bg-red-400">
              New Service
            </button>
          </div>
        </div>
        <div>
          <HomeContent />
        </div>
      </div>
    </div>
  );
};

export default index;
