
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

   
    const cartQuantity = cartItems.reduce((total, item) => total + item.totalQuantity, 0);

    
    const clearCart = () => {
        setCartItems([]); 
    };

    const updateCartItem = (productId, selectedColor, size, quantity) => {
        setCartItems(prevItems => 
            prevItems.map(item => 
                item.productId === productId && item.selectedColor === selectedColor && item.size === size
                    ? { ...item, totalQuantity: quantity, totalPrice: (item.pricePerItem * quantity).toFixed(2) }
                    : item
            )
        );
    };

    const removeFromCart = (productId, selectedColor, size) => {
        setCartItems(prevItems => prevItems.filter(item => 
            !(item.productId === productId && item.selectedColor === selectedColor && item.size === size)
        ));
    };

    const addToCart = (product) => {
        const existingProduct = cartItems.find(item => 
            item.productId === product.productId &&
            item.selectedColor === product.selectedColor &&
            item.size === product.size
        );

        if (existingProduct) {
            updateCartItem(product.productId, product.selectedColor, product.size, existingProduct.totalQuantity + product.totalQuantity);
        } else {
            setCartItems(prevItems => [...prevItems, product]);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, cartQuantity, updateCartItem, removeFromCart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
