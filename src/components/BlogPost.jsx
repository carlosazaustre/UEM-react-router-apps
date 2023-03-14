import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then(setPost);
  }, [id]);

  return (
    <div>
      {!post ? (
        <p>Loading...</p>
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};
