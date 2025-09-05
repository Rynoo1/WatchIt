import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';


const NewCart = () => {
    const [cartGot, setCartGot] = useState({});
    const [cartItem, setCartItem] = useState(null);
    const [cart, setCart] = useState(null);
    
    
    const {
        cartId,
        getCart,
        isCartLoading,
        updateCartItem,
        removeFromCart,
        getCartTotal,
        isUpdatingCart,
        isRemovingFromCart
    } = useCart();

    useEffect(() => {
        console.log('Cart Component ID:', cartId);
        console.log('Cart Component Object:', cart);
        console.log('Cart Component Items:', cart?.items);
        console.log('Cart Component length:', cart?.items.length);
        console.log('CartGot:', cart);

        const fetchCartItems = async () => {
            const gc = await getCart();
            setCart(gc);
        };

        fetchCartItems();

    }, [cartId]);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'ZAR'
        }).format(price);
    };

    const handleQuantityChange = (lineItemId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(lineItemId);
        } else {
            updateCartItem(lineItemId, newQuantity);
        }
    };

    const handleRemoveItem = (lineItemId) => {
        removeFromCart(lineItemId);
    };

  if (isCartLoading) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  const hasItems = cart?.items && Array.isArray(cart.items) && cart.items.length > 0;

  console.log('hasitems', hasItems);
  console.log('cart existts', !!cart);
  console.log('cart.items exists', !!cart?.items);
  console.log('is array', Array.isArray(cart?.items));

  if (!cart || !cart.items || cart.items.length === 0) {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h2>Your Cart is Empty</h2>
              <p>Add some products to get started!</p>
              <a href="/" className="btn btn-primary">Continue Shopping</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-8">
          <h2>Shopping Cart</h2>
          <div className="card">
            <div className="card-body">
              {cart.items.map((item) => (
                <div key={item.id} className="row align-items-center mb-3 pb-3 border-bottom">
                  <div className="col-md-2">
                    {item.variant?.product?.thumbnail && (
                      <img 
                        src={item.variant.product.thumbnail} 
                        alt={item.title}
                        className="img-fluid rounded"
                        style={{ maxHeight: '80px' }}
                      />
                    )}
                  </div>
                  <div className="col-md-4">
                    <h6 className="mb-1">{item.title}</h6>
                    <small className="text-muted">
                      {item.variant?.title !== 'Default Variant' && item.variant?.title}
                    </small>
                  </div>
                  <div className="col-md-2">
                    <span className="fw-bold">
                      {formatPrice(item.unit_price)}
                    </span>
                  </div>
                  <div className="col-md-2">
                    <div className="input-group input-group-sm">
                      <button 
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={isUpdatingCart}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        className="form-control text-center" 
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                        min="0"
                        disabled={isUpdatingCart}
                      />
                      <button 
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        disabled={isUpdatingCart}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 text-end">
                    <div className="fw-bold mb-1">
                      {formatPrice(item.total)}
                    </div>
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleRemoveItem(item.id)}
                      disabled={isRemovingFromCart}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Order Summary</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>{formatPrice(cart.subtotal)}</span>
              </div>
              {cart.tax_total > 0 && (
                <div className="d-flex justify-content-between mb-2">
                  <span>Tax:</span>
                  <span>{formatPrice(cart.tax_total)}</span>
                </div>
              )}
              {cart.shipping_total > 0 && (
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping:</span>
                  <span>{formatPrice(cart.shipping_total)}</span>
                </div>
              )}
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total:</strong>
                <strong>{formatPrice(cart.total)}</strong>
              </div>
              <button className="btn btn-success w-100 mb-2">
                Proceed to Checkout
              </button>
              <a href="/" className="btn btn-outline-primary w-100">
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCart;