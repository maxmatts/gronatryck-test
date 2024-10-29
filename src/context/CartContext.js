import React, { createContext, useContext, useState, useEffect } from "react";

// Skapar en kontext för att hantera kundvagnen
const CartContext = createContext();

// Custom hook för att använda CartContext
export const useCart = () => {
    return useContext(CartContext);
};

// Provider-komponent för att omge applikationen med kundvagnens kontext
export const CartProvider = ({ children }) => {
    // Använder useState för att hantera cartItems, laddar sparade artiklar från localStorage
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : []; // Om det finns en sparad kundvagn, använd den, annars en tom array
    });

    // Använder useEffect för att uppdatera localStorage när cartItems förändras
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Beräknar det totala antalet artiklar i kundvagnen
    const cartQuantity = cartItems.reduce((total, item) => total + item.totalQuantity, 0);

    // Funktion för att rensa kundvagnen
    const clearCart = () => {
        setCartItems([]); // Sätter cartItems till en tom array
    };

    // Funktion för att uppdatera en specifik artikel i kundvagnen
    const updateCartItem = (productId, selectedColor, size, quantity) => {
        setCartItems(prevItems => 
            prevItems.map(item => 
                item.productId === productId && item.selectedColor === selectedColor && item.size === size
                    ? { ...item, totalQuantity: quantity, totalPrice: (item.pricePerItem * quantity).toFixed(2) }
                    : item
            )
        );
    };

    // Funktion för att ta bort en artikel från kundvagnen
    const removeFromCart = (productId, selectedColor, size) => {
        setCartItems(prevItems => prevItems.filter(item => 
            !(item.productId === productId && item.selectedColor === selectedColor && item.size === size)
        ));
    };

    // Funktion för att lägga till en artikel i kundvagnen
    const addToCart = (product) => {
        const existingProduct = cartItems.find(item => 
            item.productId === product.productId &&
            item.selectedColor === product.selectedColor &&
            item.size === product.size
        );

        if (existingProduct) {
            // Om produkten redan finns, uppdatera kvantiteten
            updateCartItem(product.productId, product.selectedColor, product.size, existingProduct.totalQuantity + product.totalQuantity);
        } else {
            // Annars lägg till produkten i kundvagnen
            setCartItems(prevItems => [...prevItems, product]);
        }
    };

    // Returnerar provider med värden för att använda i barnkomponenter
    return (
        <CartContext.Provider value={{ cartItems, cartQuantity, updateCartItem, removeFromCart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
