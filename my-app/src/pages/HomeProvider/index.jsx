import { useState, useContext } from "react";
import { PiGraduationCapDuotone, PiArrowRightDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import HomeContent from "./HomeContent";
import { Menus } from "../../components/NavBar/SideMenu.jsx";
import { UserContext } from "../../context/UserContext/UserContext.jsx";

const index = () => {
  const [open, setOpen] = useState(false);
  const { session } = useContext(UserContext);

  return (
    <div className="flex">
      <div
        id="sidebar"
        className={` ${
          open ? "w-72" : "w-20"
        } hidden lg:block bg-[#c0cfd4] h-screen p-5  pt-8 relative duration-300 `}
      >
        <PiArrowRightDuotone
          src="./src/assets/control.png"
          className={`absolute text-4xl cursor-pointer -right-3 top-9 w-7 bg-white text-black
             border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div
          className={`flex gap-x-4 items-center duration-500 pt-9 ${
            open ? "justify-center duration-500" : ""
          }`}
        >
          <div className="cursor-pointer duration-500 flex rounded-md p-1 text-black">
            <PiGraduationCapDuotone
              id="logo"
              className="text-3xl cursor-pointer duration-500  "
            />
          </div>

          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
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
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-green-200   text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9 duration-100" : "mt-2 duration-100"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                {Menu.src}
                <span
                  className={`${
                    !open && "hidden duration-100"
                  } origin-left duration-200`}
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
            <h3 className="md:text-5xl">
              Welcome {session.first_name} {session.last_name}
            </h3>
          </div>
          <div className="w-full my-4 flex justify-center md:w-fit">
            <Link to="/new-service">
              <button className="btn btn-sm  md:btn-md bg-black text-white hover:bg-[#2dc653] hover:border-2 hover:border-black hover:text-black font-bold shadow-xl">
                New Service
              </button>
            </Link>
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
