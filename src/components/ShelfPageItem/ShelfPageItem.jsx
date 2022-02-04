const ShelfPageItem = ({item}) => {
    return(
        <div key={item.id}>
            <img src={item.image_url} />
            <p>{item.description}</p>
        </div>
    )
}

export default ShelfPageItem;