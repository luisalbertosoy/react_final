import visaLogo from '../../assets/img/payments/visa.svg';
import mastercardLogo from '../../assets/img/payments/mastercard.svg';
import amexLogo from '../../assets/img/payments/amex.svg';
import MainButton from '../MainButton';
import { Link } from 'react-router-dom';


const CheckoutForm = () => {
    return (
        <div className="form-container">
            <div className="payment-container">
                <div className='form-title'>CONTACT INFORMATION</div>
                <div className="contact-info">
                    <div className="info-form">
                        <input type="text" placeholder="E-mail" className="input-email" />
                        <div className="input-row">
                            <input type="text" placeholder="First name" className="input-firstname" />
                            <input type="text" placeholder="Last name" className="input-lastname" />
                        </div>
                        <input type="text" placeholder="Shipping address" className="input-address" />
                        <input type="text" placeholder="Phone" className="input-phone" />
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

                <Link to="/checkout" className="custom-link-class">
                    <MainButton className={"item-view-checkout"} label={"PAY NOW"} />
                </Link>

                <p className="terms-text">By continuing, you agree to APHN Terms of Service.</p>
            </div>
        </div>
    );
};

export default CheckoutForm;
