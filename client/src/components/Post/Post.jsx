import { formatDistanceToNow } from "date-fns";
import { FcLike, FcComments } from "react-icons/fc";

const Post = ({ post }) => {
  return (
    <li className="bg-white flex flex-col p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center">
          {post.authorInitial}
        </div>
        <div className="flex flex-col">
          <p className="font-bold">{post.author}</p>
          <p className="text-sm italic text-gray-900">
            {formatDistanceToNow(post.createAt, { addSuffix: true })}
          </p>
        </div>
      </div>
      <p className="text-gray-700">{post.message}</p>
      <div className="mt-6 flex items-center gap-4">
        <div>
          <FcLike size={24} />
          <p>{post.likes}</p>
        </div>
        <div>
          <FcComments size={24} />
          <p>{post.comments}</p>
        </div>
      </div>
    </li>
  );
};

export default Post;
