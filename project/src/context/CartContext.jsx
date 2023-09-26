import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

function saveDataToSessionStorage (data) {
    const jsonData = JSON.stringify(data);
    sessionStorage.setItem('cartData', jsonData);
}

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState(() => {
        const storedData = sessionStorage.getItem('cartData');
        return storedData ? JSON.parse(storedData) : [];
    });


    const totalQuantity = cartItems.reduce((accumulator, item) => {
        return accumulator + item.quantity;
      }, 0);

    useEffect(() => {
        saveDataToSessionStorage(cartItems)
    }, [cartItems])

    const addToCart = (product, quantity, total) => {
        const existingCartItem = cartItems.find((item) => item.product.id === product.id)

        if (existingCartItem) {
            setCartItems((prevCartItems) => 
                prevCartItems.map((item) => 
                    item.product.id === product.id ?
                    {...item, quantity: item.quantity + quantity, total: item.total + total} :
                    item
                )
            )
        } else {
            setCartItems((prevCartItems) => [
                ...prevCartItems,
                {product, quantity, total}
            ])
        }
    }

    const removeFromCart = (id) => {
        setCartItems((prevCartItems) => 
            prevCartItems.filter((item) => 
                item.product.id !== id 
            )
        )
    }

    const incrementQuantity = (id) => {
        setCartItems((prevCartItems) => 
          prevCartItems.map((item) => 
            item.product.id === id ?
            { ...item, quantity: item.quantity + 1, total: item.total + item.product.price } :
            item
          )
        );
      }
    
      const decrementQuantity = (id) => {
        setCartItems((prevCartItems) => 
          prevCartItems.map((item) => 
            item.product.id === id && item.quantity > 1 ?
            { ...item, quantity: item.quantity - 1, total: item.total - item.product.price } :
            item
          )
        );
      }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, totalQuantity, removeFromCart, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    )
}