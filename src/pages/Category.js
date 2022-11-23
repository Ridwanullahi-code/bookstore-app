import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkBookStatus } from '../redux/categories/categories';
import Button from '../components/Button';

function Category() {
  const selectedCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkBookStatus());
  };

  return (
    <div>
      <h1>categories!</h1>
      <h2>{selectedCategories.categories[0]}</h2>
      <Button btnType="button" value="Check Status" click={handleClick} />
    </div>
  );
}

export default Category;
