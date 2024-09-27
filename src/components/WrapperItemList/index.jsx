import { useState, useEffect } from "react";
import ItemList from "../ItemList";

const WrapperItemList = ({ limit }) => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch('/src/data/items.json')
        .then(res => res.json())
        .then(data => {
            if (limit) {
                setItems(data.slice(0, limit));
            } else {
                setItems(data);
            }
        });
    }, [limit]);

    return <ItemList items={items} />;
};

export default WrapperItemList;