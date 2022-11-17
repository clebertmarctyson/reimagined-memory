import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useThemeContext } from "../context/ThemeContext";

const Nav = () => {
  const { theme, dispatch } = useThemeContext();

  return (
    <nav
      className={`flex justify-between py-4 px-10 ${
        theme === "dark" && "bg-slate-900"
      }`}
    >
      <Link
        className={`font-bold text-2xl ${theme === "dark" && "text-sky-500"}`}
        to="/"
      >
        Reimagined Memory
      </Link>

      <ul
        className={`flex flex-1 gap-8 justify-end ${
          theme === "dark" && "text-gray-100"
        }`}
      >
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link
            className="bg-sky-500 text-white rounded-lg py-2 px-4"
            to={"/logout"}
          >
            Logout
          </Link>
        </li>
      </ul>

      <div>
        {theme === "dark" ? (
          <MdLightMode
            onClick={() => dispatch({ type: "SET_THEME", payload: "light" })}
            className="cursor-pointer text-white ml-10"
            size={30}
          />
        ) : (
          <MdDarkMode
            onClick={() => dispatch({ type: "SET_THEME", payload: "dark" })}
            className="cursor-pointer text-slate-900 ml-10"
            size={30}
          />
        )}
      </div>
    </nav>
  );
};

export default Nav;
