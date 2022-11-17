import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-gray-100 flex justify-between py-4 px-10">
      <Link to="/">Brand Name</Link>

      <ul className="flex gap-8">
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
