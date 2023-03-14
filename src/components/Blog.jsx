import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then(setPosts);
  }, []);

  return (
    <div>
      <h3>Blog</h3>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
