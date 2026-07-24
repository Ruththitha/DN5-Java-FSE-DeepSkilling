import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  const [selected, setSelected] = useState('book');

  // 1. if-else rendering (as a function)
  const renderWithIfElse = () => {
    if (selected === 'book') {
      return <BookDetails />;
    } else {
      return null;
    }
  };

  // 2. Ternary operator
  const blogView = selected === 'blog' ? <BlogDetails /> : null;

  // 3. Logical && operator
  const courseView = selected === 'course' && <CourseDetails />;

  // 4. Element variable
  let selectedView;
  if (selected === 'book') selectedView = <BookDetails />;
  else if (selected === 'blog') selectedView = <BlogDetails />;
  else if (selected === 'course') selectedView = <CourseDetails />;

  // 5. switch-case
  const renderWithSwitch = () => {
    switch (selected) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      default:
        return <p>Select a category</p>;
    }
  };

  // 6. IIFE (Immediately Invoked Function Expression) inside JSX
  return (
    <div className="App">
      <h1>Blogger App</h1>

      <div className="btn-group">
        <button onClick={() => setSelected('book')}>Book Details</button>
        <button onClick={() => setSelected('blog')}>Blog Details</button>
        <button onClick={() => setSelected('course')}>Course Details</button>
      </div>

      <hr />

      <h3>Rendering using switch-case:</h3>
      {renderWithSwitch()}

      <hr />

      <h3>Rendering using element variable:</h3>
      {selectedView}

      <hr />

      <h3>Rendering using IIFE:</h3>
      {(() => {
        if (selected === 'book') return <BookDetails />;
        if (selected === 'blog') return <BlogDetails />;
        if (selected === 'course') return <CourseDetails />;
        return null;
      })()}
    </div>
  );
}

export default App;