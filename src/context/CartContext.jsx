import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
    };

    const removeItemCart = (productId) => {
        setCart((prevCart) => {
            const index = prevCart.findIndex(item => item.id === productId);
            if (index !== -1 ) {
                const newCart = [...prevCart];
                newCart.splice(index, 1);
                return newCart;
            }
            return prevCart;
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalSummary = () => {
        const total = cart.reduce((acc,item) => acc + item.price, 0);
        return total.toLocaleString('en-US', { style: 'currency', currency: 'USD'});
    }; 

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItemCart, clearCart, getTotalSummary }}>
            {children}
        </CartContext.Provider>
    );
};
