import { Link } from "react-router-dom";
import MainButton from "../MainButton";
import { useViewCart } from "../../context/ViewCartContext";
import { useEffect, useRef } from "react";
import { useCart } from "../../context/CartContext";

const CartDetailView = ({ cartItems }) => {
    const { isCartOpen, closeCart } = useViewCart();
    const { removeItemCart } = useCart();
    const cartRef = useRef(null);

    const handleRomoveItemCart = (cartItemId) => {
        removeItemCart(cartItemId);
        console.log ("removed product ID:", cartItemId);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                closeCart();
            }
        };

        if (isCartOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        console.log(handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isCartOpen, closeCart]);

    const handleCartClick = (event) => {
        event.stopPropagation();
    };
    
    return (
        <div ref={cartRef} className={`cart-viewer ${isCartOpen ? 'open' : ''}`} onClick={handleCartClick}>
            <div className="cart-viewer-header">
                <div className="cart-viewer-header-title">YOUR BAG</div>
                <button className="close-button" onClick={closeCart}>CLOSE</button>
            </div>
            <div className="cart-item-form">
                <div className="cart-item-scroll">
                    <div className="cart-viewer-item">
                        {cartItems.length > 0 ? (
                            cartItems.slice().reverse().map((item, index) => (
                                <div key={index} className="cart-item">
                                    <div className="item-img-container">
                                        <img src={item.thumbnail} alt={item.title} />
                                    </div>
                                    <div className="item-info-container">
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>Size: {item.size}</p>
                                            <p>Color: {item.materialcolor}</p>
                                            <p>${item.price} USD</p>
                                        </div>
                                        <button className="remove-button" onClick={() => handleRomoveItemCart(item.id)}>REMOVE ITEM</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="empty-message">"Your Bag is empty"</div>
                        )}
                    </div>
                    <div className="cart-viewer-footer">
                        <Link to="/cart" className="custom-link-class">
                            <MainButton className={"item-view-checkout"} label={"GO TO BAG"} onClick={closeCart} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDetailView;