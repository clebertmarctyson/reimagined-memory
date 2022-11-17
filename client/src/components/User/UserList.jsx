import { useThemeContext } from "../../context/ThemeContext";

const UserList = () => {
  const { theme } = useThemeContext();
  return (
    <div className="w-72 py-10">
      <h1 className={`text-center ${theme === "dark" && "text-gray-100"}`}>
        Users
      </h1>
    </div>
  );
};

export default UserList;
