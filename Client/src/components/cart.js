import React, {useState} from 'react'

function Cart() {
    const [cart, setCart] = useState({
        prodID: "",
        prodName: "",
        
    });
  return (
    <div>Cart</div>
  )
}

export default Cart