import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || '';

  useEffect(() => {
    axios.get('http://localhost:3000/posts/posts')
      .then(response => {
        setPosts(response.data);
        setCategories([...new Set(response.data.map(post => post.category))]);
      });
  }, []);

  const handleFilter = (category) => {
    setSearchParams({ category });
  };

  const filteredPosts = category 
    ? posts.filter(post => post.category === category) 
    : posts;

  return (
    <div>
      <h1>Blog Posts</h1>
      <div>
        <button onClick={() => handleFilter('')}>All</button>
        {categories.map(cat => (
          <button key={cat} onClick={() => handleFilter(cat)}>{cat}</button>
        ))}
      </div>
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add New Post</Link>
    </div>
  );
};

export default Home;
