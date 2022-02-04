import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

import ShelfPageItem from '../ShelfPageItem/ShelfPageItem';

function ShelfPage() {

  // setup dispatch and store
  const dispatch = useDispatch();
  const store = useReduxStore;

  useEffect(() => {
    dispatch({
      type: 'FETCH_SHELF'
    });
  }, []);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <div className="shelf">
        {store.shelfReducer.map((item, id) => (
          <ShelfPageItem key={id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ShelfPage;
