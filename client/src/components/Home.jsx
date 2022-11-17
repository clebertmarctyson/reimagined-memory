import { useThemeContext } from "../context/ThemeContext";
// import FriendList from "./Friend/FriendList";
import PostAdd from "./Post/PostAdd";
import PostList from "./Post/PostList";
// import UserList from "./User/UserList";

const Home = () => {
  const { theme } = useThemeContext();

  return (
    <section className={`w-full flex ${theme === "dark" && "bg-slate-900"}`}>
      <div className="w-2/4 mx-auto min-h-screen flex flex-col">
        <PostAdd />
        <PostList />
      </div>
    </section>
  );
};

export default Home;
