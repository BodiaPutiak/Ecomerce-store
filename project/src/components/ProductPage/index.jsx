import './index.scss';
import items from '../../assets/data/AllData';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TrendigProducts from '../Home/TrendingProducts';
import { useCart } from '../../context/CartContext';

function ProductPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idFromQuery = queryParams.get('id');
    const product = items.filter(item => item.id == idFromQuery);
    
    const [productQuantity, setProductQuantity] = useState(1);
    const [productTotal, setProductTotal] = useState(product[0].price);

    const { addToCart } = useCart();

    const handleIncrementQuantity = () => {
        setProductQuantity((prev) => prev + 1);
    }
    const handleDecrementQuantity = () => {
        if (productQuantity <= 1) {
            return;
        }
        setProductQuantity((prev) => prev - 1);
    }

    useEffect(() => {
        setProductTotal(productQuantity * product[0].price)
    }, [productQuantity])


    const handleAddToCart = () => {
        addToCart(product[0], productQuantity, productTotal);
    }


    return (
        <section>
            <div className="product-container">
                <h1>{product[0].description}</h1>
                <div className="product-img-container">
                    <img src={product[0].img} alt="" />
                </div>
                <div className="product-description-container">
                    <p>{product[0].specs}</p>

                    <div className="quantity-price-flex-container">
                        <h2>Quantity</h2>
                        <div className="increment-decrement-buttons">
                            <button onClick={handleDecrementQuantity}>-</button>
                            <h2>{productQuantity}</h2>
                            <button onClick={handleIncrementQuantity}>+</button>
                        </div>
                        <h2>{productTotal}$</h2>
                    </div>
                    <div className="buy-add-buttons-container">
                        <button className='add' onClick={handleAddToCart}>ADD TO CART</button>
                        <button className='buy'>BUY NOW</button>
                    </div>
                </div>
            </div>
            <div className="charateristics-grid-container">
                <div>
                    <h2>Texture:</h2>
                    <p>{product[0].texture}</p>
                </div>
                <div>
                    <h2>Weigth:</h2>
                    <p>{product[0].weight}</p>
                </div>
                <div>
                    <h2>Size:</h2>
                    <p>{product[0].size}</p>
                </div>
            </div>
            <TrendigProducts />
        </section>
    )
}

export default ProductPage;