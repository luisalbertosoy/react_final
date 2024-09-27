import CartWidget from "../../components/CartWidget"
import MainMenu from "../../components/MainMenu";
import { useViewCart } from "../../context/ViewCartContext";

const Header = () => {
    const { openCart } = useViewCart();

    const links = [
        { label: 'READY TO WEAR', href: '/store' },
        { label: 'SALE', href: '#' },
        { label: 'JOURNAL', href: '#' }
    ];

    return (
        <header className='header-index'>      
            <nav className='nav-container'>
                <input className="menu-toggle" type="checkbox" id="menu-toggle"></input>
                <label className="menu-button n2 push-right" htmlFor="menu-toggle">MENU</label>
                <MainMenu className="navbar n3 push-right" links={links} />
                <a onClick={openCart}>
                    <CartWidget quantity={0} />
                </a>
            </nav>
        </header>
    );
};

export default Header;