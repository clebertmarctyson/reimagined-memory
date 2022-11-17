import { useThemeContext } from "../../context/ThemeContext";

const PostAdd = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`sticky top-0 flex gap-4 bg-gray-50 px-8 py-8 my-5 rounded-lg shadow-sm shadow ${
        theme === "dark" && "bg-slate-800"
      }`}
    >
      <div className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
        M
      </div>
      <form className="w-full flex flex-col">
        <textarea
          name="message"
          className="bg-gray-50 w-full h-40 p-4 resize-none rounded-lg outline-none border-none"
          placeholder="Share what you think"
        ></textarea>
        <button
          type="submit"
          className="bg-sky-500 text-white rounded-lg py-2 px-4 self-end mt-4 "
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default PostAdd;
