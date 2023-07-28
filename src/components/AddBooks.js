import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { postBookItems } from '../redux/books/booksSlice';
import styles from '../style/Header.module.css';

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const addNew = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuid(),
      title,
      author,
      category,
    };
    dispatch(postBookItems(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className={styles.add_form}>
      <h2>ADD NEW BOOK</h2>
      <div className={styles.form}>
        <div>
          <input
            type="text"
            value={title}
            className={styles.input_title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book title"
          />
          <input
            type="text"
            value={author}
            className={styles.input_author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />
        </div>
        <div>
          <select
            value={category}
            className={styles.input_category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Action">Action</option>
            <option value="Fiction">Fiction</option>
            <option value="Nonfiction">Nonfiction</option>
          </select>
        </div>
        <div className={styles.ekpsini}>
          <button type="button" onClick={addNew} className={styles.btn_submit}>
            ADD BOOK
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
