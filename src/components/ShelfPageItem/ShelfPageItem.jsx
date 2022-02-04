import { useDispatch } from 'react-redux';

const ShelfPageItem = ({item}) => {

    const dispatch = useDispatch();

    const handleDelete = (item) => {
        console.log(`in handleDelete, item to delete is ${item.id}`);
        dispatch({
            type: 'REMOVE_ITEM',
            payload: item
        });
    }

    return(
        <div key={item.id}>
            <img src={item.image_url} style={{ height: 200, width: 200 }}/>
            <p>{item.description}</p>
            <button onClick={() => handleDelete(item)}>Delete</button>
        </div>
    )
}

export default ShelfPageItem;