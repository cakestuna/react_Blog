import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import PostDetails from './component/PostDetails';
import AddPost from './component/AddPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/add" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;