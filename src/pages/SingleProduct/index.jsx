import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";

const SingleProduct = () => {
    
    const { id } = useParams();
    let [ item, setItem ] = useState({});

    useEffect(() => {
        fetch('/src/data/items.json')
        .then(res => res.json())
        .then(data => setItem(data.find(item => item.id == id)))
    }, []);
    
    return (
        <main className="main-container">
            <ProductDetail {...item} />
        </main>
    );
};

export default SingleProduct;