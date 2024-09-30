import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import MainButton from "../../components/MainButton";

const Cart = () => {
    const { cart, removeItemCart, getTotalSummary, clearCart } = useCart();

    const handleRomoveItemCart = (productId) => {
        removeItemCart(productId);
        console.log ("removed product ID:", productId);
    };

    return (
        <div className="cart-container">
            <div className="cart-header">
                <div className="cart-header-title">YOUR BAG</div>
                <Link to={"/store"} className="cart-keep-shopping">CONTINUE SHOPPING</Link>
            </div>
            <div className="checkout-container">
                <div className="cart-item-container">
                {cart.length > 0 && (
                    <div className="table-header">
                        <div className="table-label">PRODUCT</div>
                        <div className="table-label text-right">PRICE</div>
                        <div className="table-label text-right">TOTAL</div>
                    </div>
                )}
                {cart.length > 0 ? (
                    cart.slice().reverse().map((item, index) => (
                        <div key={index} className="checkout-cart-item">
                            <div className="checkout-item-info">
                                <div className="checkout-img-container">
                                    <img src={item.img.thumbnail} alt={item.title} />
                                </div>
                                <div className="checkout-info-container">
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>Size: {item.size}</p>
                                        <p>Color: {item.materialcolor}</p>
                                    </div>
                                    <button className="remove-button" onClick={() => handleRomoveItemCart(item.id)}>REMOVE ITEM</button>
                                </div>
                            </div>
                            <p className="text-right" style={{ fontSize: '13px' }}>{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} USD</p>
                            <p className="text-right" style={{ fontSize: '13px' }}>{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} USD</p>
                        </div>
                    ))
                ) : (
                    <div className="empty-message">"Your Bag is empty"</div>
                )}
                </div>
                {cart.length > 0 && (
                    <div className="checkout-section">
                        <div className="checkout-header">
                            <div className="checkout-header-title">SUMMARY</div>
                            <div className="checkout-counter">{cart.length}</div>
                        </div>
                        <div>
                            <div className="checkout-total">
                                <p style={{ fontWeight: 'bold', fontSize: '14px' }}>SUBTOTAL</p>
                                <p style={{ fontWeight: 'bold', fontSize: '14px' }}>{getTotalSummary()} USD</p>
                            </div>
                            <p style={{ fontSize: '12px' }}>Tax included. Shipping calculated at checkout.</p>
                        </div>
                        <Link to="/checkout" className="custom-link-class">
                            <MainButton className={"item-view-checkout"} label={"CHECKOUT"} />
                        </Link>
                        <div className="clear-container">
                            <div className="clear-button" onClick={clearCart}>EMPTY CART NOW</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;