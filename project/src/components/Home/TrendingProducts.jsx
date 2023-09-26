import './index.scss';
import items from '../../assets/data/AllData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function TrendingProducts() {
    let [currentSlide, setCurrentSlide] = useState(0);
    const navigator = useNavigate()

    
    const totalSlides = 4;

    const handleRightButton = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const handleLeftButton = () => {
        setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
        );
    };

    const advanceSlideAutomatically = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const translateX = `translateX(${currentSlide * - 33.5}%)`;

    const handleRedirectToProduct = (id) => {
        navigator(`/product?id=${encodeURIComponent(id)}`)
        window.scrollTo(0, 0); 
    }

    useEffect(() => {
        const intervalId = setInterval(advanceSlideAutomatically, 4200);
        return () => clearInterval(intervalId)
    }, []);
    return (
        <div className="trends-container">
            <div className="header-container">
                <h2>Trending Now</h2>
                <div className="skip-buttons-container">
                    <button onClick={handleLeftButton}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button onClick={handleRightButton}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
            <div className='trending-products-container'>
                <div className="trending-products-slider" style={{transform: translateX}} >
                    {items.slice(9, 17).map((item) => {
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
            </div>                
        </div>
    )
}
export default TrendingProducts;