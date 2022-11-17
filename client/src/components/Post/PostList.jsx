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
  }, [posts]);

  return (
    <ul>
      {posts && posts.map((post, index) => <Post key={index} post={post} />)}
    </ul>
  );
};

export default PostList;
