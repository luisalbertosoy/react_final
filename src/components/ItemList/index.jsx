import Card from "../Card"; 

const ItemList = ({ items = [] }) => {

    return (
        <div className="cards-cont">
            {items.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </div>
    );
};

export default ItemList;