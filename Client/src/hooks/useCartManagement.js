import { useEffect, useState } from "react";
import { useCart, useCreateCart, useCreateLineItem, useUpdateLineItem, useDeleteLineItem } from "medusa-react";

const useCartManagement = () => {
    const [cartId, setCartId] = useState(null);

    const { cart, isLoading: isCartLoading } = useCart(cartId, {
        enabled: !!cartId,
    });

    const createCart = useCreateCart();

    const createLineItem = useCreateLineItem(cartId);
    const updateLineItem = useUpdateLineItem(cartId);
    const deleteLineItem = useDeleteLineItem(cartId);

    useEffect(() => {
        const initialiseCart = async () => {
            const savedCartId = localStorage.getItem('cart_id');

            if (savedCartId) {
                setCartId(savedCartId)
            } else {
                createCart.mutate({}, {
                    onSuccess: ({ cart }) => {
                        localStorage.setItem('cart_id', cart.id);
                        setCartId(cart.id);
                    },
                    onError: (error) => {
                        console.error('Error creating cart: ', error);
                    }
                });
            }
        };

        initialiseCart();
    }, []);

    // Adding item to cart
    const addToCart = (variantId, quantity = 1) => {
        if (!cartId) {
            console.error('No cart ID available');
            return;
        }

        createLineItem.mutate({
            variant_id: variantId,
            quantity: quantity,
        }, {
            onSuccess: ({ cart }) => {
                console.log('Item added to cart successfully');
            },
            onError: (error) => {
                console.error('Error adding item to cart:', error);
            }
        });
    };

    // Updating item quantity 
    const updateCartItem = (lineItemId, quantity) => {
        updateLineItem.mutate({
            lineId: lineItemId,
            quantity: quantity,
        }, {
            onSuccess: ({ cart }) => {
                console.log('Cart item updated successfully');
            },
            onError: (error) => {
                console.error('Error updating cart item:', error);
            }
        });
    };

    // Remove item from cart
    const removeFromCart = (lineItemId) => {
        deleteLineItem.mutate({
            lineId: lineItemId,
        }, {
            onSuccess: ({ cart }) => {
                console.log('Item removed from cart successfully');
            },
            onError: (error) => {
                console.error('Error removing item from cart:', error);
            }
        });
    }

    // Get cart total
    const getCartTotal = () => {
        if (!cart) return 0;
        return cart.subtotal / 100;
    };

    const getCartItemCount = () => {
        if (!cart || !cart.items) return 0;
        return cart.items.reduce((total, item) => total + item.quantity, 0);
    };

    return {
        cart,
        isCartLoading,
        addToCart, 
        updateCartItem,
        removeFromCart,
        getCartTotal,
        getCartItemCount,
        isAddingToCart: createLineItem.isPending,
        isUpdatingCart: updateLineItem.isPending,
        isRemovingFromCart: deleteLineItem.isPending,
    };
};

export default useCartManagement;