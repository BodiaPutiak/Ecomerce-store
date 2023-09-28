import { useCart } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

function Cart() {
    const { cartItems, totalQuantity, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

    return (
        <>
            <div className="cart-header-flex">
                <h1>CART &nbsp;</h1>
                <h1>({totalQuantity})</h1>
            </div>
            <ul className='cart-items'>
                {cartItems.map((cartItem) => {
                    return (
                        <li key={cartItem.product.id}>
                            <div className="img-container">
                                <img src={cartItem.product.img} alt="" />
                            </div>
                            <div className="text-container">
                                <div className="description-price-container">
                                    <h2>{cartItem.product.description}</h2>
                                    <h2>{cartItem.total}$</h2>
                                </div>
                                
                                <div className="buttons-container">
                                    <button onClick={() => {decrementQuantity(cartItem.product.id)}}>-</button>
                                    <h2>{cartItem.quantity}</h2>
                                    <button onClick={() => {incrementQuantity(cartItem.product.id)}}>+</button>
                                    <button onClick={() => {removeFromCart(cartItem.product.id)}} className='delete-button'>
                                        <FontAwesomeIcon icon={faTrashCan} color='#FFF'/>
                                    </button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Cart;