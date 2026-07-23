import React from 'react'
import { Container } from '../Components/Container'
import { BredCrumb } from '../Components/BredCrumb'

export const Cart = () => {
  return (
    <>
    <Container className="mt-10 mb-10">
      <BredCrumb/>
      <div>
        <h2 className='text-2xl font-bold mb-10 mt-10'>Shopping Cart</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2 shadow-md p-4 rounded-md'>
            
          </div>
          <div className='lg:col-span-1 shadow-md p-4 rounded-md'>
            <div className='bg-white rounded-md'>
              <h3 className='text-xl font-bold mb-4'>Order Summary</h3>
              <div className='space-y-2 mb-4'>
                <div className='flex justify-between'>
                  <span>Sub Total</span>
                  <span>Total Amount</span>
                </div>
                <div className='flex justify-between'>
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className='pt-2 font-bold'>
                  <span>Total</span>
                  <span>Total Amount</span>
                </div>
              </div>
              <button>Proceed To Checkout</button>
            </div>
          </div>

        </div>

      </div>
    </Container>
    </>
  )
}
