import React from 'react'
import ProductCard from './ProductCard'
import ProductData from '../data/ProductData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

function FoodItems() {
  const search= useSelector((state)=> state.search.search)
  const category= useSelector((state)=>state.category.category)
  const handleToast =(name)=> toast.success(`Added ${name} to cart`);

  return (
    <>
    <Toaster position='top-center' reverseOrder={false} />
    <div className='flex flex-wrap gap-8 my-10 justify-evenly'>
    {
      ProductData.filter((product)=>{
        if (category==="All"){
          return product.name.toLowerCase().includes(search.toLowerCase());

        } else{
          return (category === product.category && product.name.toLowerCase().includes(search.toLowerCase()))
        }
      }).map((product)=>(
        <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                img={product.img}
                price={product.price}
                rating={product.rating}
                desc={product.desc}
                handleToast={handleToast}


                
              />

      ))
      
    }
       
        {/* //     return (
        //         <FoodCard 
        //         key={food.id}
        //         id={food.id}
        //         name={food.name}
        //         img={food.img}
        //         price={food.price}
        //         rating={food.rating}
        //         desc={food.desc}
        //         handleToast={handleToast}


                
        //         />
        //     )
        // }) */}
    
    </div>
    </>
  )
}

export default FoodItems