import React, { createContext, useContext } from 'react';
import useCartManagement from '../hooks/useCartManagement';

const CartContext = createContext(null);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartContextProvider');
    }
    return context;
};

export const CartContextProvider = ({ children }) => {
    const cartManagement = useCartManagement();

    return (
        <CartContext.Provider value={cartManagement}>
            {children}
        </CartContext.Provider>
    );
};