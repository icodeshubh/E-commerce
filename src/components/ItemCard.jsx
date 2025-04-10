import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {
  decremenetQty,
  incremenetQty,
  removeFromCart
} from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

function ItemCard({ id, name, price, img, qty }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart({ id, name, price, img, qty }));
    toast(`${name} Removed!`, {
      icon: '🗑️',
    });
  };

  const handleIncrement = () => {
    dispatch(incremenetQty({ id }));
  };

  const handleDecrement = () => {
    if (qty > 1) {
      dispatch(decremenetQty({ id }));
    } else {
      handleRemove(); 
    }
  };

  return (
    <div className="relative flex items-center gap-3 shadow-md rounded-lg p-3 bg-white mb-4">
    
      <MdDelete
        onClick={handleRemove}
        className="absolute top-2 right-2 text-gray-600 hover:text-red-600 cursor-pointer text-xl"
      />

      
      <img
        src={img}
        alt={name}
        className="w-[60px] h-[60px] object-cover rounded"
      />

      
      <div className="flex-1">
        <h2 className="font-semibold text-gray-800 text-base">{name}</h2>
        <div className="flex items-center justify-between mt-1">
          <span className="text-red-500 font-bold">${price.toFixed(2)}</span>

        
          <div className="flex items-center gap-2">
            <AiOutlineMinus
              onClick={handleDecrement}
              className="border px-1.5 py-0.5 rounded-md text-gray-600 hover:bg-amber-200 cursor-pointer text-2xl"
            />
            <span className="font-medium">{qty}</span>
            <AiOutlinePlus
              onClick={handleIncrement}
              className="border px-1.5 py-0.5 rounded-md text-gray-600 hover:bg-amber-200 cursor-pointer text-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
