import './index.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import items from '../../assets/data/AllData';

function Categories() {
    const categoriesArray = [
        'All',
        'Furnitures',
        'Electronics',
        'Lamps',
        'Kitchen',
        'Chairs',
        'Skin Care'
    ];

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryFromQuery = queryParams.get('category');

    const [category, setCategory] = useState(categoryFromQuery || 'All');
    const navigator = useNavigate()


    // const handleCategorieButton = (category) => {
    //     setCategory(category);
    // }

    const handleRedirectToProduct = (id) => {
        navigator(`/product?id=${encodeURIComponent(id)}`)
    }

    return (
        <section>
            <div className='head'>
                <NavLink to='/'>       
                    <FontAwesomeIcon icon={faChevronLeft} /> &nbsp;
                    Home
                </NavLink>
                <div>
                    {category}
                </div>  
            </div>
            <div className="categories-flex-container">
                {categoriesArray.map((item, id) => {
                    return (
                        <button onClick={()=>setCategory(item)} key={id}>
                            {item}
                        </button>
                    )
                })}
            </div>
            <div className="proud-products-container">
                <div className="proud-products-grid">
                    {items.filter(item => category === 'All' || item.category === category)
                        .map(item => (
                            <div className="product" key={item.id} onClick={() => handleRedirectToProduct(item.id)}>
                                <div className="img-container">
                                    <img src={item.img} alt="" /> 
                                </div>
                                <h4>{item.description}</h4>
                                <p>{item.price}$</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Categories;