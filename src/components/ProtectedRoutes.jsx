import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({element}) {
    const cartItems = useSelector((state)=> state.cart.cart)

  return (
    cartItems.length > 0 ? element : <Navigate to="/"/>
  
  )
}

export default ProtectedRoutes