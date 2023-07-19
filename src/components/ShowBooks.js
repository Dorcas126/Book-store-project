import React from 'react';
import Book from './Book';
import Form from './Form';

const books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
];

const ShowBooks = () => (
  <div>
    {books.map((book) => (
      <Book key={book.id} title={book.title} author={book.author} />
    ))}
    <Form />
  </div>
);

export default ShowBooks;