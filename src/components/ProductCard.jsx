import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';

function FoodCard({id,name, price,desc,rating,img, handleToast}) {
  const dispatch= useDispatch();
  return (
    <div className='bg-white font-bold w-[320px] lg:w-[250px] p-5 flex flex-col rounded-3xl gap-2' >
        <img src={img} alt=""
        className=' lg:w-auto h-[170px] lg:h-[130px] hover:scale-110 transition-all duration-500 ease-in-out'

        />
        <div className='text-sm flex justify-between'>
            <h2>{name}</h2>
            <span className='text-red-600'>${price}</span>
        </div>
        <p className='text-sm font-normal'>
            {desc.slice(0,50)}...
        </p>
        <div className='flex justify-between'>
            <span className='flex justify-center items-center'>
            <FaStar className='text-yellow-400' /> {rating}

            </span>
            <button 
            onClick={()=>{
              dispatch(addToCart({id,name,price,rating,img, qty:1}))
              handleToast(name);

            }}
            
            className='p-1.5 text-white bg-indigo-400 hover:bg-indigo-500 rounded-lg text-sm '> Add to Cart</button>
        </div>

    </div>
  )
}

export default FoodCard 