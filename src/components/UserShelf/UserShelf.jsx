import { useParams } from 'react-router-dom';
import ShelfPage from '../ShelfPage/ShelfPage';

function UserShelf()  {

    const params = useParams();

    let id = params.id;
    console.log(id);

    return (
        <ShelfPage id={id}/>
    )
}

export default UserShelf;