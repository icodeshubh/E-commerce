import React, { useEffect } from 'react'
import { useState } from 'react'
import { RingLoader } from 'react-spinners'

function Success() {
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])




  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        { loading ? (
          <RingLoader color="#F39E60" className='text-6xl' />

        ) : (
          <div>
            <h2 className='text-3xl font-semibold mb-4 text-center'>
              Order Successfull!
            </h2>
            <p>
              Your order has been placed successfully.

            </p>
          </div>
        ) }


      </div>



    </>
  )
}

export default Success