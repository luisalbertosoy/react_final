import aphnIcon from '../../assets/img/brand/aphn_icon.svg';
import { Link } from 'react-router-dom';
import MainButton from '../MainButton';
import { useCart } from '../../context/CartContext';
import SizeSelector from '../SizeSelector';
import { useState, useEffect } from 'react';
import { useViewCart } from '../../context/ViewCartContext';

const ProductDetail = ({ id, img, division, title, description, sku, materialcolor, materialmade, model, className, price, color, category, href = "#", tag}) => {
    const { addToCart } = useCart();
    const { openCart } = useViewCart();
    const [selectedSize, setSelectedSize] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        setErrorMessage(null);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            setErrorMessage('Please, select a size to proceed.');
            return;
        }

        const product = {
            id,
            thumbnail: img.thumbnail, 
            division, 
            title,  
            description, 
            sku, 
            materialcolor, 
            materialmade, 
            price, 
            color, 
            category,
            size: selectedSize 
        };
        addToCart(product);
        openCart();
        console.log (product);
    };

    useEffect(() => {
        if (errorMessage) {
            console.log('Error message updated:', errorMessage);
        }
    }, [errorMessage]);

    return (
        <section className="herospace-product">
            <div className="aphn-icon">
                <Link to="/">
                    <img src={aphnIcon} alt="APHN ICON" />
                </Link>
            </div>
            <div className="tech-info">
                <div>
                    <p className="font-12 clr-midgray">{division}</p>
                    <h1 className="font-20">{title}</h1>
                </div>
                <div id="sp-description" className="font-14">
                    <div dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
                <div id="sp-color" className="font-14">Supplier color: {materialcolor}</div>
                <div id="sp-description-b" className="font-14">
                    <div dangerouslySetInnerHTML={{ __html: materialmade }}></div>
                </div>
                <div id="sku" className="font-14">{sku}</div>
            </div>
            <div className="add-module">
                <div className="price-color-legal">
                    <div>
                        <p className="price-d font-20">${price} USD</p>
                        <div className="product-color bg-olive"></div>
                    </div>
                    <p className="legal-d font-14 clr-midgray">Taxes and duties included.</p>
                </div>
                <div className="select-container">
                    <SizeSelector productId={id} className="size" onSizeChange={handleSizeChange} /> 
                    <button className="wish">WISHLIST</button>
                    <MainButton label={"ADD TO BAG"} onClick={handleAddToCart} /* disabled={!selectedSize} */ />
                </div>
                {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
                <div>
                    <p className="size-guide">{model} <a href="">SIZE GUIDE</a></p>
                    <p className="shipping-info font-14 clr-midgray">Mexico : Free shipping on orders over $150 USD.</p>
                </div>
            </div>
            <div className="sp-gallery">
                {img && img.halffront && <img src={img.halffront} alt={`${title} - Half Front`} />}
                {img && img.halffrontside && <img src={img.halffrontside} alt={`${title} - Half Side Front`} />}
                {img && img.halffrontback && <img src={img.halffrontback} alt={`${title} - Half Side Back`} />}
                {img && img.fullfront && <img src={img.fullfront} alt={`${title} - Full Front`} />}
                {img && img.dfront && <img src={img.dfront} alt={`${title} - Detailed Front`} />}
                {img && img.dback && <img src={img.dback} alt={`${title} - Detailed Back`} />}
            </div>
        </section>
    );
}

export default ProductDetail;