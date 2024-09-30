import visaLogo from '../../assets/img/payments/visa.svg';
import mastercardLogo from '../../assets/img/payments/mastercard.svg';
import amexLogo from '../../assets/img/payments/amex.svg';
import MainButton from '../MainButton';
import { useCart } from '../../context/CartContext';
import { db } from '../../config/firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

const CheckoutForm = () => {
    const { cart, getTotalSummary, clearCart } = useCart();
    const [orderId, setOrderId] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "orders"), {
                contactInfo,
                items: cart,
                total: getTotalSummary(),
                createdAt: new Date(),
            });
            setOrderId(docRef.id);
            setIsSubmitted(true);
            clearCart();
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div className="form-container">
            {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="payment-container">
                    <div className="form-title">CONTACT INFO</div>
                    <div className="contact-info">
                        <div className="info-form">
                            <input
                                type="text"
                                name="email"
                                placeholder="E-mail"
                                className="input-email"
                                value={contactInfo.email}
                                onChange={handleInputChange}
                            />
                            <div className="input-row">
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    className="input-firstname"
                                    value={contactInfo.firstName}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    className="input-lastname"
                                    value={contactInfo.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <input
                                type="text"
                                name="address"
                                placeholder="Shipping address"
                                className="input-address"
                                value={contactInfo.address}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                className="input-phone"
                                value={contactInfo.phone}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    
                    <div className='form-title'>PAYMENT</div>
                    <div className="payment-method">
                        <div className="credit-card-form">
                            <div className="card-icons">
                                <img src={visaLogo} alt="Visa" />
                                <img src={mastercardLogo} alt="Mastercard" />
                                <img src={amexLogo} alt="Amex" />
                            </div>
                            <input type="text" placeholder="Card number" className="input-card" />
                            <div className="input-row">
                                <input type="text" placeholder="Expiration date (MM / YY)" className="input-expiration" />
                                <input type="text" placeholder="Security code" className="input-security" />
                            </div>
                            <input type="text" placeholder="Name on card" className="input-name" />
                            <label className="checkbox">
                                <input type="checkbox" defaultChecked /> Use shipping address as billing address
                            </label>
                        </div>
                    </div>

                    <div className="remember-me">
                        <h2>Remember me</h2>
                        <label className="checkbox">
                            <input type="checkbox" defaultChecked /> Save my information for a faster checkout next time
                        </label>
                        <p className="secure-text">Secure and encrypted</p>
                    </div>

                    <MainButton className={"item-view-checkout"} label={"PAY NOW"} type="submit" />

                    <p className="terms-text">By continuing, you agree to APHN Terms of Service.</p>
                </form>
            ) : (
                <div className='payment-container'>
                    <div className='thanks-title'>THANK YOU FOR YOUR PURCHASE</div>
                    {orderId && <p className="order-confirmation">ORDER ID: {orderId}</p>}
                </div>
            )}
        </div>
    );
};

export default CheckoutForm;