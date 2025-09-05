import { useEffect, useState } from "react";
import { useCart, useCreateLineItem, useUpdateLineItem, useDeleteLineItem } from "medusa-react";
import { useQueryClient } from "@tanstack/react-query";
import { sdk } from "../lib/medusa-config";

const useCartManagement = () => {
    const [cartId, setCartId] = useState(null);
    const queryClient = useQueryClient();

    const { cart, isLoading: isCartLoading } = useCart(cartId, {
        enabled: !!cartId,
    });

    const createLineItem = useCreateLineItem(cartId);
    const updateLineItem = useUpdateLineItem(cartId);
    const deleteLineItem = useDeleteLineItem(cartId);

    useEffect(() => {
        const initialiseCart = async () => {
            const savedCartId = sessionStorage.getItem('cart_id');

            if (savedCartId) {
                setCartId(savedCartId)
            } else {
                sdk.store.cart.create({ region_id: "reg_01K42NZ85N3782EA5X8YJRQEC8" })
                .then(({ cart }) => {
                    console.log(cart);
                    sessionStorage.setItem('cart_id', cart.id);
                    setCartId(cart.id);
                    console.log('Cart created successfully');
                })
                .catch((error) => {
                    console.error('Error creating cart:', error);
                });
            }
            console.log('Cart initialised')
        };

        initialiseCart();

    }, []);

    // Get Cart
    const getCart = async () => {
        if (!cartId) {
            console.error('No Cart ID available');
            return null;
        }

        try {
            const { cart } = await sdk.store.cart.retrieve(cartId);
            return cart;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    // Adding item to cart
    const addToCart = (variantId, quantity = 1) => {
        if (!cartId) {
            console.error('No cart ID available');
            return;
        }

        sdk.store.cart.createLineItem(cartId, {
            variant_id: variantId,
            quantity: quantity,
        })
        .then(({ cart }) => {
            console.log(cart);
        })
    };

    // Updating item quantity
    // TODO: update to use correct sdk methods
    const updateCartItem = (lineItemId, quantity) => {
        updateLineItem.mutate({
            lineId: lineItemId,
            quantity: quantity,
        }, {
            onSuccess: ({ cart }) => {
                console.log('Cart item updated successfully');
                queryClient.invalidateQueries({ queryKey: ['carts', cartId] });
            },
            onError: (error) => {
                console.error('Error updating cart item:', error);
            }
        });
    };

    // Remove item from cart
    // TODO: update to use correct sdk methods
    const removeFromCart = (lineItemId) => {
        deleteLineItem.mutate({
            lineId: lineItemId,
        }, {
            onSuccess: ({ cart }) => {
                console.log('Item removed from cart successfully');
                queryClient.invalidateQueries({ queryKey: ['carts', cartId] });
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
        cartId,
        getCart,
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