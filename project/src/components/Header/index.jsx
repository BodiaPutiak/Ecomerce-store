import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';
import Cart from '../Cart';
import EmptyCart from '../Cart/EmptyCart';
import logo from '../../assets/img/logo/black-transparent-logo.svg';
import './index.scss'; 

function Header() {
    const {totalQuantity} = useCart();
    const [openMenu, setOpenMenu] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    
    const handleBurgerMenuButton = () => {
        setOpenMenu(!openMenu);
    };
    
    const closeMobileNavBar = () => {
        setOpenMenu(false);
    }
   
    const handleCart = () => {
        setOpenCart(!openCart);
    }


    return (
        <>
            <header>
                <div className="logo-container">
                    <NavLink to='/'>
                        <img src={logo} alt="" />
                    </NavLink>
                </div>
                <nav className="nav-bar">
                    <NavBar />
                </nav>

                <div className="right-section">
                    <button className='burger-menue' onClick={handleBurgerMenuButton}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <button onClick={handleCart}>
                        <FontAwesomeIcon icon={faCartShopping}/>
                        <div className="cart-counter"><p>{totalQuantity}</p></div>
                    </button>
                </div>
                <div className={`cart-container ${openCart ? 'show' : ''}`}>
                    {totalQuantity === 0 ? <EmptyCart/> : <Cart />}
                    <FontAwesomeIcon icon={faXmark}  onClick={handleCart}/>
                </div>
                <div className={`darken-bg ${openCart ? 'show' : ''}`}></div>

            </header>
            
            <nav className={`mobile-nav-bar ${openMenu ? 'show' : ''}`}>
                <NavBar closeMobileNavBar={closeMobileNavBar}/>
            </nav>
        </>
    )
}

export default Header;
