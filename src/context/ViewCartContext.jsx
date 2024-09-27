import { createContext, useState, useContext } from "react";

const ViewCartContext = createContext();

export const useViewCart = () => useContext(ViewCartContext);

export const ViewCartProvider = ({ children} ) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    return (
        <ViewCartContext.Provider value={{ isCartOpen, openCart, closeCart}}>
            {children}
        </ViewCartContext.Provider>
    );
};