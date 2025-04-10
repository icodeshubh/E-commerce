import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const total = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[35vw] h-full p-5 bg-white mb-3 ${activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50 shadow-lg`}>
        {/* Header */}
        <div className='flex justify-between items-center mb-4'>
          <span className='text-xl font-bold text-gray-800'>My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-600 hover:border-red-600 cursor-pointer'
          />
        </div>

        {/* Scrollable Cart Items */}
        <div className="overflow-y-auto max-h-[calc(100vh-200px)] pr-2">
          {
            cartItems.length > 0 ? cartItems.map((product) => (
              <ItemCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                img={product.img}
                qty={product.qty}
              />
            )) : (
              <h2 className='text-center text-xl font-bold text-gray-500'>Your Cart Is Empty</h2>
            )
          }
        </div>

        {/* Footer Summary */}
        <div className='absolute bottom-0 left-0 w-full px-5 bg-white py-4 shadow-inner'>
          <h3 className='font-semibold text-gray-800'>Items: {totalQty}</h3>
          <h3 className='font-semibold text-gray-800'>Total Amount: ${total.toFixed(2)}</h3>
          <hr className='my-2 text-gray-300' />
          <button
            onClick={() => navigate("/success")}
            className='bg-indigo-400 font-bold px-3 hover:bg-indigo-500 cursor-pointer text-white py-2 rounded-lg w-full mb-2'
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Cart Icon */}
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`cursor-pointer rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}
      />
    </>
  );
}

export default Cart;
