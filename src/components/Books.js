import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

const Books = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <div className="books-container">
      <div className="book-item">
        <div className="section1">
          <h2>{title}</h2>
          <p>{author}</p>
          <div className="book-button-section">
            <button type="button">Comments</button>
            <button onClick={handleRemoveBook} type="button">
              Remove
            </button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="section2">
          <div className="progress-bar">
            <CircularProgressbar value="50" text="50%" />
          </div>
          <div>
            <h2>50 %</h2>
            <p>Completed</p>
          </div>
        </div>
        <div className="section3">
          <p>CURRENT CHAPTER</p>
          <h3>Chapter 10</h3>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;