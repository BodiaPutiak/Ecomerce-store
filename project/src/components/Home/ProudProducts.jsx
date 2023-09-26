import items from '../../assets/data/AllData';
import { useNavigate } from 'react-router-dom';
import './index.scss'


function ProudProducts() {
    const navigator = useNavigate();

    const handleRedirectToProduct = (id) => {
        navigator(`/product?id=${encodeURIComponent(id)}`)
    }

    return (
        <div className="proud-products-grid">
            {items.slice(0, 8).map((item) => {
                return (
                    <div className="product" key={item.id} onClick={() => handleRedirectToProduct(item.id)}>
                        <div className="img-container">
                            <img src={item.img} alt="" /> 
                        </div>
                        <h4>{item.description}</h4>
                        <p>{item.price}$</p>
                    </div>
                )
            })}  
        </div>
    )
}
export default ProudProducts;