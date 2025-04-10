import React, { useEffect, useState } from 'react'
import ProductData from '../data/ProductData'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/slices/CategorySlice'


function CategoryMenu() {
  const [categories, setCategories] = useState([])

  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(ProductData.map((food) => food.category))]
    setCategories(uniqueCategories)
    console.log(uniqueCategories);

  }

  useEffect(() => {
    listUniqueCategories()

  }, [])
  const dispatch = useDispatch()
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="ml-6">
      <h3 className='text-xl font-semibold'>Find the best Product</h3>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button
          onClick={ () => dispatch(setCategory("All")) }
          className={ `px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-indigo-400 hover:text-white ${selectedCategory === "All" && "bg-indigo-400 text-white"}` }
        >
          All
        </button>




        { categories.map((category, index) => {
          return (
            <button
              onClick={ () => dispatch(setCategory(category)) }
              key={ index }
              className={ `px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-indigo-400 hover:text-white ${selectedCategory === category && "bg-indigo-400 text-white"}` }
            >
              { category.charAt(0).toUpperCase() + category.slice(1) }
            </button>
          );
        }) }

      </div>
    </div>
  )
}

export default CategoryMenu