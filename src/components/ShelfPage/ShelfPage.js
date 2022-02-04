import React from 'react';
import { useDispatch } from 'react-redux';

function ShelfPage() {

  const dispatch = useDispatch();
  
  let testItems = [
    { id: 1,
      description: 'a human skull',
      image_url: 'https://cdn10.bigcommerce.com/s-p1mhyx/products/1773/images/4498/Adult_Human_Skull_-_Asian_Male_Thumbnail__60388.1630008401.1280.1280.jpg?c=2',
      user_id: 3
    },
    { id: 2,
      description: 'a whoopie cushion',
      image_url: 'https://m.media-amazon.com/images/I/61IHkpsR9AS._AC_SX425_.jpg',
      user_id: 2
    },
    { id: 3,
      description: 'a bowl of split pea soup',
      image_url: 'https://thedeliciouslife.com/wp-content/uploads/2011/12/split-pea-soup.jpg',
      user_id: 1
    }
  ]

  const handleDelete = (item) => {
    console.log(`in handleDelete, item to delete is ${item.id}`);
    dispatch({
      type: 'REMOVE_ITEM',
      payload: item
    });
  }

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
        { testItems.map( item => (
          <li>
            <div>
              <img src={item.image_url} style={{ height: 200, width: 200 }}/>
              {item.description}
              {item.user_id}
              <button onClick={() => handleDelete(item)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default ShelfPage;
