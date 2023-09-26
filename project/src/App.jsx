import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import Categories from './components/Categories';
import ProductPage from './components/ProductPage';
import Layout from './components/Layout';
import { CartProvider } from './context/CartContext';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function App() {
  
const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, [pathname]);
  return (
    <CartProvider> 
      <Routes>
        <Route exact path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/product' element={<ProductPage />} />
        </Route>
      </Routes>
    </CartProvider>
  )
}

export default App
