import React from 'react';

const blogs = [
  { id: 1, title: 'Understanding React Hooks', author: 'Ruthu' },
  { id: 2, title: 'JavaScript ES6 Features', author: 'Kumar' },
  { id: 3, title: 'CSS Grid vs Flexbox', author: 'Priya' }
];

function BlogDetails() {
  return (
    <div className="details-box">
      <h2>📝 Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> by {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;