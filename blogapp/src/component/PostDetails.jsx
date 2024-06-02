import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`)
      .then(response => {
        setPost(response.data);
        document.title = response.data.title;
      });
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Category:</strong> {post.category}</p>
    </div>
  );
};

export default PostDetails;
