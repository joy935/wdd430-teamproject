"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
id: number;
name: string;
price: number;
image: string;
quantity: number;
sellerId: number;
}

interface CartContextType {
cartItems: CartItem[];
addToCart: (product: any, quantity: number) => void;
removeFromCart: (productId: number) => void;
updateQuantity: (productId: number, quantity: number) => void;
clearCart: () => void;
cartTotal: number;
cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
const [cartItems, setCartItems] = useState<CartItem[]>([]);
const [cartTotal, setCartTotal] = useState<number>(0);
const [cartCount, setCartCount] = useState<number>(0);

// Load cart from localStorage on initial render
useEffect(() => {
const storedCart = localStorage.getItem('cart');
if (storedCart) {
    try {
    const parsedCart = JSON.parse(storedCart);
    setCartItems(parsedCart);
    } catch (error) {
    console.error('Error parsing cart from localStorage', error);
    }
}
}, []);

// Update localStorage whenever cart changes
useEffect(() => {
localStorage.setItem('cart', JSON.stringify(cartItems));

// Calculate cart total and count
const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
setCartTotal(total);

const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
setCartCount(count);
}, [cartItems]);

const addToCart = (product: any, quantity: number) => {
setCartItems(prevItems => {
    // Check if product already exists in cart
    const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
    
    if (existingItemIndex >= 0) {
    // Update quantity if item exists
    const updatedItems = [...prevItems];
    updatedItems[existingItemIndex].quantity += quantity;
    return updatedItems;
    } else {
    // Add new item if it doesn't exist
    return [...prevItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
        sellerId: product.sellerId
    }];
    }
});
};

const removeFromCart = (productId: number) => {
setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
};

const updateQuantity = (productId: number, quantity: number) => {
if (quantity <= 0) {
    removeFromCart(productId);
    return;
}

setCartItems(prevItems => 
    prevItems.map(item => 
    item.id === productId ? { ...item, quantity } : item
    )
);
};

const clearCart = () => {
setCartItems([]);
};

return (
<CartContext.Provider value={{ 
    cartItems, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    cartTotal,
    cartCount
}}>
    {children}
</CartContext.Provider>
);
};

export const useCart = () => {
const context = useContext(CartContext);
if (context === undefined) {
throw new Error('useCart must be used within a CartProvider');
}
return context;
};