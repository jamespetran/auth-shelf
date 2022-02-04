
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import * as React from 'react';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import ShelfPageItem from '../ShelfPageItem/ShelfPageItem';
import './ShelfPage.css';

function ShelfPage({ id }) {
  const dispatch = useDispatch();
  const [itemForm, setItemForm] = useState(false);
  const [descriptionInput, setDescriptionInput] = useState('');
  const [urlInput, setUrlInput] = useState('');

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

  const store = useReduxStore();

  // if an id is passed down, client is in My Shelf view, so pull user specific items, if no id pull all
  if (id) {
    useEffect(() => {
      dispatch({
        type: 'FETCH_USER_SHELF',
        payload: id
      });
    }, []);
  } else {
    useEffect(() => {
      dispatch({
        type: 'FETCH_SHELF'
      });
    }, []);
  }

  return (
    <div className="container">
      <h2 className="shelfTitle">Shelf</h2>
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
            <input id="submit" type="submit" />
          </form>
          :
          <Button variant="contained" onClick={() => addItem()} > Add Item </Button>
        }
      </div>
      <p>All of the available items can be seen here.</p>
      <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        <Card csx={{ minWidth: 275 }}>
            {store.shelf.map((item, id) => (
              <ShelfPageItem key={id} item={item} />
            ))}
        </Card>
      </Box>
    </div>
  );
}

export default ShelfPage;
