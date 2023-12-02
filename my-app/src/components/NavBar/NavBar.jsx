import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext.jsx";

const NavBar = ({ menus }) => {
  const { session, logout } = useContext(UserContext);

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {session && (
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menus.map((Menu, index) => (
                <Link key={index} to={Menu.to}>
                  <li
                    className={`flex rounded-md p-2 cursor-pointer hover:bg-slate-200 bg-white  text-sm items-center gap-x-4
                    `}
                  >
                    <div>{Menu.src}</div>
                    <div>{Menu.title}</div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
        <Link
          to={session ? "/ProviderHome" : "/"}
          className="btn btn-ghost normal-case text-xl"
        >
          TutorCity
        </Link>
      </div>

      <div className="navbar-end">
        {session ? (
          <div id="profile" className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    session ? session.profileImgUrl : "../../public/deadmau.png"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to={"/profile"}>
                <li className="justify-between">
                  <a>Profile</a>
                </li>
              </Link>
              <Link onClick={logout}>
                <li>
                  <a>Logout</a>
                </li>
              </Link>
            </ul>
          </div>
        ) : (
          <Link to={"/login"} className="btn">
            Service Provider
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
