import React from 'react';
import { Modal, Table, Image, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const CartModal = ({ show, handleClose }) => {
  const { 
    cart, 
    removeFromCart, 
    updateCartItem,
    isRemovingFromCart,
    isUpdatingCart 
  } = useCart();

  // Format price for South African Rand
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR'
    }).format(price / 100); // Medusa stores prices in cents
  };

  // Calculate total from Medusa cart
  const getCartTotal = () => {
    if (!cart || !cart.total) return 0;
    return cart.total / 100; // Convert from cents to main currency
  };

  // Handle remove item
  const handleRemoveItem = (lineItemId) => {
    removeFromCart(lineItemId);
  };

  // Handle quantity change (optional - you can add quantity controls)
  const handleQuantityChange = (lineItemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(lineItemId);
    } else {
      updateCartItem(lineItemId, newQuantity);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Current Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart?.items && cart.items.length > 0 ? (
          <Table borderless>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Total<span className='text-white'>...</span></th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Image 
                      fluid 
                      src={
                        item.variant?.product?.thumbnail || 
                        '/default-product-image.jpg'
                      }
                      style={{ maxWidth: '50px', maxHeight: '50px' }}
                    />
                  </td>
                  <td>
                    {item.title}
                    {item.variant?.title !== 'Default Variant' && (
                      <br />
                    //   <small className="text-muted">{item.variant?.title}</small>
                    )}
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      {/* Optional: Add quantity controls */}
                      <button 
                        className="btn btn-sm btn-outline-secondary me-1"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={isUpdatingCart}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button 
                        className="btn btn-sm btn-outline-secondary ms-1"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        disabled={isUpdatingCart}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    {formatPrice(item.total)}
                  </td>
                  <td>
                    <Button 
                      variant='danger' 
                      size="sm"
                      onClick={() => handleRemoveItem(item.id)}
                      disabled={isRemovingFromCart}
                    >
                      {isRemovingFromCart ? 'Removing...' : 'Remove'}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="text-center py-4">
            <p>Your cart is empty</p>
            <Button variant="primary" onClick={handleClose}>
              Continue Shopping
            </Button>
          </div>
        )}
      </Modal.Body>
      {cart?.items && cart.items.length > 0 && (
        <Modal.Footer>
          <Table>
            <thead>
              <tr>
                <th>Total:</th>
                <th className='text-end'>{formatPrice(cart.total)}</th>
              </tr>
            </thead>
          </Table>
          {/* <Button variant='success' onClick={handleCheck}>
            Checkout
          </Button> */}
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default CartModal;