import { useLocation, Outlet } from "react-router-dom";
import Header from "../containers/Header";
import BluredHeader from "../containers/BluredHeader";
import SubNav from "../containers/SubNav";
import Footer from "../containers/Footer";
import { useCart } from "../context/CartContext";
import { useViewCart } from "../context/ViewCartContext";
import CartDetailView from "../components/CartDetailView";

const BaseLayout = () => {
    const { cart } = useCart();
    const { isCartOpen, closeCart } = useViewCart();

    const location = useLocation();
    const hideSubNav = location.pathname.includes("/detail") || location.pathname.includes("/cart") || location.pathname.includes("/checkout");

    return (
        <>
            <Header />
            {!hideSubNav && <SubNav />}
            <BluredHeader />
            <Outlet />
            <Footer />
            <CartDetailView isCartOpen={isCartOpen} onClose={closeCart} cartItems={cart} />
        </>
    );
};

export default BaseLayout;