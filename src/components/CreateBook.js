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
    <form onSubmit={handler}>
      <Input
        classes="book"
        name="title"
        holder="Enter Book Title"
        required
        change={onChange}
      />
      <Input
        classes="book"
        name="author"
        holder="Enter Author Name"
        required
        change={onChange}
      />
      <input className="add-book" type="submit" value="Add Book" />
    </form>
  );
}

export default CreateBook;
