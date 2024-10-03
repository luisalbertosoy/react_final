import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.config";

const WrapperItemList = ({ limit }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "items"));
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                
                if (limit) {
                    setItems(data.slice(0, limit));
                } else {
                    setItems(data);
                }
            } catch (err) {
                setError("Error al cargar los datos");
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, [limit]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return <ItemList items={items} />;
};

export default WrapperItemList;