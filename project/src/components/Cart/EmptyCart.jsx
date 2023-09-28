import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import emptyImg from '../../assets/img/cart/empty-cart.png'
import './index.scss';

function Cart() {
    const { totalQuantity } = useCart();
    const navigator = useNavigate();
    const handleRedirect = () => {
        navigator('/categories')
    }
    return (
        <>
            <div className="cart-header-flex">
                <h1>CART &nbsp;</h1>
                <h1>({totalQuantity})</h1>
            </div>
            <div className="empty-cart-cont">
                <img src={emptyImg} alt="" />
                <h2>Your cart is empty</h2>
                <button onClick={handleRedirect}>Browse products</button>
            </div>
        
        </>
    )
}

export default Cart;