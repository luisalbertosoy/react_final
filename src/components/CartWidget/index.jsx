import { Icon } from '@iconify/react';
import Pill from '../Pill';
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
    const { cart } = useCart();

    return (
        <div className='cart-widget'>
            <Pill quantity={cart.length} />
            <Icon className='cart-icon__cart' icon="uil:shopping-bag" />
        </div>
    );
}

export default CartWidget;