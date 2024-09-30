import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.config';

const SizeSelector = ({ productId, className, onSizeChange }) => {
    const [sizes, setSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSizes = async () => {
            try {
                const productDoc = await getDoc(doc(db, 'items', productId));
                
                if (productDoc.exists()) {
                    const productData = productDoc.data();
                    if (productData.sizes) {
                        setSizes(productData.sizes);
                    } else {
                        setError('No sizes available for this product.');
                    }
                } else {
                    setError('Product not found.');
                }
            } catch (error) {
                console.error('Error fetching sizes from Firestore:', error);
                setError('Error fetching sizes.');
            }
        };

        fetchSizes();
    }, [productId]);

    const handleSizeChange = (event) => {
        const size = event.target.value;
        setSelectedSize(size);
        onSizeChange(size);
    };

    return (
        <div>
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <select className={className} value={selectedSize} onChange={handleSizeChange}>
                    <option value="">Select Size</option>
                    {sizes.map(size => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default SizeSelector;