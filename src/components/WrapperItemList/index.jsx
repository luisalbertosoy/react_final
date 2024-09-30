import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.config";

const WrapperItemList = ({ limit }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true); // Para manejar el estado de carga
    const [error, setError] = useState(null); // Para manejar errores

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "items")); // 'items' es el nombre de tu colección en Firestore
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
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return <ItemList items={items} />;
};

export default WrapperItemList;