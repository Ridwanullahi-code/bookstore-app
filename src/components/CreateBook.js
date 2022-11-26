import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/features/bookSlicer';
import Input from './Input';

function CreateBook() {
  const [state, setState] = useState({
    item_id: '', title: '', author: '', category: '',
  });
  // function to store user inputs
  const id = useSelector((state) => state.books);
  const onChange = (e) => {
    setState({
      ...state, item_id: id + 1, [e.target.name]: e.target.value, category: 'Action packed',
    });
  };
  // function to dispatch action
  const dispatch = useDispatch();

  const handler = (e) => {
    e.preventDefault();
    dispatch(addBook(state));
    setState({
      item_id: '', title: '', author: '', category: 'Action packed',
    });
  };

  return (
    <form onSubmit={handler} className="add-section">
      <h2 className="add-label">ADD NEW BOOK</h2>
      <div className="form-input">
        <Input
          classes="book input"
          name="title"
          holder="Enter Book Title"
          required
          change={onChange}
        />
        <Input
          classes="author input"
          name="author"
          holder="Enter Author Name"
          required
          change={onChange}
        />
        <input className="add-btn" type="submit" value="Add Book" />
      </div>
    </form>
  );
}

export default CreateBook;
