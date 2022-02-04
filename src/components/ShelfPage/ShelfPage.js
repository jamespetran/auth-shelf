import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function ShelfPage() {
  const dispatch = useDispatch();
  const [itemForm, setItemForm] = useState(false)
  const [descriptionInput, setDescriptionInput] = useState('')
  const [urlInput, setUrlInput] = useState('')

  const handleSubmit = (evt) => {
    // prevent reload
    evt.preventDefault();
    //do... this
    const newItem = {
      description: descriptionInput,
      image_url: urlInput
    }
    // console.log(newItem);
    dispatch({
      type: 'ADD_ITEM',
      payload: newItem
    })

    //clear inputs and set item form back to false to remove it from DOM
    setDescriptionInput('');
    setUrlInput('');
    setItemForm(false);
  }

  const addItem = () => {
    setItemForm(true);
  }


  return (
    <div className="container">
      <h2>Shelf</h2>
      <div id="item-add" >
        {itemForm ?
          <form id="item-form" onSubmit={(evt) => handleSubmit(evt)}>
            <label htmlFor="item-description">Item Description:</label>
            <input
              id="item-description"
              type="text"
              value={descriptionInput}
              onChange={(evt) => setDescriptionInput(evt.currentTarget.value)}
            />
            <label htmlFor="item-description">Item URL:</label>
            <input
              id="item-url"
              type="text"
              value={urlInput}
              onChange={(evt) => setUrlInput(evt.currentTarget.value)}
            />
            <input type="submit"/ >
          </form>
          :
          <button onClick={() => addItem()} > Add Item </button>
        }
      </div>
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
