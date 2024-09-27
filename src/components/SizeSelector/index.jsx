import { useState, useEffect } from 'react';

const SizeSelector = ({ productId, className, onSizeChange }) => {
    const [sizes, setSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState('');

    useEffect(() => {
        const fetchSizes = async () => {
            try {
                const response = await fetch('/src/data/items.json');
                const data = await response.json();
                const product = data.find(item => item.id === productId);
                
                if (product) {
                    setSizes(product.sizes);
                }
            } catch (error) {
                console.error('Error fetching sizes:', error);
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
        <select className={className} value={selectedSize} onChange={handleSizeChange}>
            <option value="">Select Size</option>
            {sizes.map(size => (
                <option key={size} value={size}>
                    {size}
                </option>
            ))}
        </select>
    );
};

export default SizeSelector;