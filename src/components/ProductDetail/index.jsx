import aphnIcon from '../../assets/img/brand/aphn_icon.svg';
import { Link, useParams } from 'react-router-dom';
import MainButton from '../MainButton';
import { useCart } from '../../context/CartContext';
import SizeSelector from '../SizeSelector';
import { useState, useEffect } from 'react';
import { useViewCart } from '../../context/ViewCartContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.config';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { openCart } = useViewCart();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productDoc = await getDoc(doc(db, 'items', id));
                if (productDoc.exists()) {
                    setProduct({ id: productDoc.id, ...productDoc.data() });
                } else {
                    setError('Product not found');
                }
            } catch (err) {
                setError('Error loading product');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    const handleSizeChange = (size) => {
        setSelectedSize(size);
        setErrorMessage(null);
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            setErrorMessage('Please, select a size to proceed.');
            return;
        }

        const productToCart = {
            ...product,
            size: selectedSize,
        };
        addToCart(productToCart);
        openCart();
        console.log(productToCart);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        product && (
            <section className="herospace-product">
                <div className="aphn-icon">
                    <Link to="/">
                        <img src={aphnIcon} alt="APHN ICON" />
                    </Link>
                </div>
                <div className="tech-info">
                    <div>
                        <p className="font-12 clr-midgray">{product.division}</p>
                        <h1 className="font-20">{product.title}</h1>
                    </div>
                    <div id="sp-description" className="font-14">
                        <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                    </div>
                    <div id="sp-color" className="font-14">Supplier color: {product.materialcolor}</div>
                    <div id="sp-description-b" className="font-14">
                        <div dangerouslySetInnerHTML={{ __html: product.materialmade }}></div>
                    </div>
                    <div id="sku" className="font-14">{product.sku}</div>
                </div>
                <div className="add-module">
                    <div className="price-color-legal">
                        <div>
                            <p className="price-d font-20">${product.price} USD</p>
                            <div className="product-color bg-olive"></div>
                        </div>
                        <p className="legal-d font-14 clr-midgray">Taxes and duties included.</p>
                    </div>
                    <div className="select-container">
                        <SizeSelector productId={id} className="size" onSizeChange={handleSizeChange} /> 
                        <button className="wish">WISHLIST</button>
                        <MainButton label={"ADD TO BAG"} onClick={handleAddToCart} />
                    </div>
                    {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
                    <div>
                        <p className="size-guide">{product.model} <a href="">SIZE GUIDE</a></p>
                        <p className="shipping-info font-14 clr-midgray">Mexico : Free shipping on orders over $150 USD.</p>
                    </div>
                </div>
                <div className="sp-gallery">
                    {product.img?.halffront && <img src={product.img.halffront} alt={`${product.title} - Half Front`} />}
                    {product.img?.halffrontside && <img src={product.img.halffrontside} alt={`${product.title} - Half Side Front`} />}
                    {product.img?.halffrontback && <img src={product.img.halffrontback} alt={`${product.title} - Half Side Back`} />}
                    {product.img?.fullfront && <img src={product.img.fullfront} alt={`${product.title} - Full Front`} />}
                    {product.img?.dfront && <img src={product.img.dfront} alt={`${product.title} - Detailed Front`} />}
                    {product.img?.dback && <img src={product.img.dback} alt={`${product.title} - Detailed Back`} />}
                </div>
            </section>
        )
    );
}

export default ProductDetail;