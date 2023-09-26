import './index.scss';
import homeImg1 from '../../assets/img/header/home-img-1.jpg';
import homeImg2 from '../../assets/img/header/home-img-2.jpg';
import homeImg3 from '../../assets/img/header/home-img-3.jpg';
import homeImg4 from '../../assets/img/header/home-img-4.jpg';
import bannerImg1 from '../../assets/img/banner1.jpg';
import bannerImg2 from '../../assets/img/banner2.jpg'

import ProudProducts from './ProudProducts';
import TrendingProducts from './TrendingProducts'


import { useNavigate } from 'react-router-dom';



function HomePage() {
   
    const navigator = useNavigate()
    
    const handleRedirectToCategories = (selectedCategory) => {
        navigator(`/categories?category=${encodeURIComponent(selectedCategory)}`)
    }


    return (
        <main>
            <div className="hero-grid-container">
                <div onClick={() => handleRedirectToCategories('Furnitures')} className="grid-item">
                    <img src={homeImg1} alt="" />
                    <h1>Live Comfortably</h1>
                </div>
                <div onClick={() => handleRedirectToCategories('Skin Care')} className="grid-item">
                    <img src={homeImg2} alt="" />
                    <h1>Skincare</h1>
                </div>
                <div onClick={() => handleRedirectToCategories('Kitchen')} className="grid-item">
                    <img src={homeImg3} alt="" />
                    <h1>Kitchen</h1>
                </div>
                <div onClick={() => handleRedirectToCategories('Electronics')} className="grid-item">
                    <img src={homeImg4} alt="" />
                    <h1>Electronics</h1>
                </div>
            </div>

            <div className='proud-products-container'>
                <h2>Products we are proud of</h2>
                <ProudProducts />
            </div>

            <div className="banner">
                <div className="text-container">
                    <h2>Creative harmonious living</h2>
                    <p>Our products are all made tostandard sizes so that you can mix and match them freely.</p>
                    <button onClick={() => handleRedirectToCategories('All')}>SHOP NOW</button>
                </div>
                <div className="img-container">
                    <img src={bannerImg1} alt="" />
                </div>
            </div>
            <TrendingProducts />
            <div className="banner">
                <div className="img-container">
                    <img src={bannerImg2} alt="" />
                </div>
                <div className="text-container">
                    <h2>Creative harmonious living</h2>
                    <p>Our products are all made tostandard sizes so that you can mix and match them freely.</p>
                    <button onClick={() => handleRedirectToCategories('All')}>SHOP NOW</button>
                </div>
            </div>
            
        </main>
    )
}
export default HomePage;