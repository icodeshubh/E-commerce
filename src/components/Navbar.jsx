import React from 'react'
import { setSearch } from '../redux/slices/SearchSlice'
import { useDispatch } from 'react-redux'
// import mainlogo from "../assets/mainlogo"


function Navbar() {
  const dispatch = useDispatch()
  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 px-10 mb-10 bg-indigo-400 w-full'>
      <div >

        {/* <img src={} alt="" /> */}
        
        <h1 className='text-2xl font-bold'>E-Commerce</h1>
        <h3 className='text-lg font-bold text-gray-600'>
          {new Date().toUTCString().slice(0,16)}
        </h3>
      </div>
      <div>
        <input type="search"
        onChange={(e)=>dispatch(setSearch(e.target.value))}
        name='search'
        placeholder='Search here'
        className='p-3 border border-gray-400 bg-white text-sm rounded-lg outline-none w-full lg:w-[25vw]'
         />
      </div>

    </nav>
  )
}

export default Navbar