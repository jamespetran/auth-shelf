import { useDispatch } from 'react-redux';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        <Card key={item.id} csx={{ m: 2 }}>
            <CardContent>
            <img src={item.image_url} style={{ height: 200, width: 200 }}/>
            <p>{item.description}</p>
            </CardContent>
            <CardActions>
                <button onClick={() => handleDelete(item)}>Delete</button>
            </CardActions>
        </Card>
    )
}

export default ShelfPageItem;