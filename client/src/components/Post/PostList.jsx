import { useEffect, useState } from "react";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <ul className="rounded-lg p-8 overflow-y-scroll flex flex-col gap-8">
      {posts && posts.map((post, index) => <Post key={index} post={post} />)}
    </ul>
  );
};

export default PostList;
