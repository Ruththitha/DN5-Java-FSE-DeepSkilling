import React from 'react';

const books = [
  { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
  { id: 2, title: 'Atomic Habits', author: 'James Clear' },
  { id: 3, title: 'Ikigai', author: 'Hector Garcia' }
];

function BookDetails() {
  return (
    <div className="details-box">
      <h2>📚 Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> — {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;