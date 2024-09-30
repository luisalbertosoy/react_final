import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import MainButton from "../../components/MainButton";
import CheckoutForm from "../../components/CheckoutForm";

const Checkout = () => {
    const { cart, getTotalSummary } = useCart();

    return (
        <div className="order-container">
            <div className="order-header">
                <div>COMPLETE YOUR ORDER</div>
                <Link to={"/store"} className="cart-keep-shopping">CONTINUE SHOPPING</Link>
            </div>
            <div className="complete-container">
                <div className="form-section">
                    <CheckoutForm />
                </div>
                <div className="status-section">
                    {cart.length > 0 && (
                        cart.slice().reverse().map((item, index) => (
                            <div key={index} className="order-item">
                                <div className="order-item-info">
                                    <div className="order-img-container">
                                        <img src={item.img.thumbnail} alt={item.title} />
                                    </div>
                                    <div className="order-info-container">
                                        <div>
                                            <p style={{ fontWeight: 'bold' }}>{item.title}</p>
                                            <p>Size: {item.size}</p>
                                            <p>Color: {item.materialcolor}</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-right" style={{ fontSize: '14px' }}>{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                            </div>
                        ))
                    )}
                    <div className="checkout-header">
                        <div className="checkout-header-title" style={{ fontSize: '24px'}}>SUMMARY</div>
                        <div className="checkout-counter">{cart.length}</div>
                    </div>
                    <div>
                        <div className="order-total">
                            <p style={{ fontWeight: 'bold', fontSize: '14px' }}>TOTAL ORDER</p>
                            <p style={{ fontWeight: 'bold', fontSize: '14px' }}>{getTotalSummary()} USD</p>
                        </div>
                        <p style={{ fontSize: '12px' }}>Tax included. Shipping calculated at checkout.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;