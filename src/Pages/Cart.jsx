import React from 'react'
import { Container } from '../Components/Container'
import { BredCrumb } from '../Components/BredCrumb'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { removeReducer, updateReducer } from '../Cart/CartSlice'




export const Cart = () => {


  const dispatch = useDispatch();
  const cartItems = useSelector ((state)=> state.cart.items)
  const total = cartItems.reduce((sum, item)=> sum + item.price * item.quantity, 0);


  if( cartItems.length === 0){
    return <>
    <Container>
      <div className='mt-10 mb-80'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-primary font-poppins'>The Cart is Empty</h2>
          <Link to="/shop"><p className='text-gray-700 font-bold text-5 mt-10 underline'>Add to The Another Product</p></Link>
        </div>
      </div>
    </Container>
    </>
  }





  return (
    <>
    <Container className="mt-10 mb-10">
      <BredCrumb/>
      <div>
        <h2 className='text-2xl font-bold mb-10 mt-10 px-4'>Shopping Cart</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2 shadow-md p-4 rounded-md'>


            {cartItems.map((item)=> (
              <div key={item.id} className='flex items-center gap-4 py-4 border-b'>
                <Link to={`/allProducts/${item.id}`}>
                <img src={item.thumbnail} 
                alt={item.title} className='w-24 h-24 object-cover rounded'/>
                </Link>
                <div className='flex-1'>
                  <Link to={`/allProducts/${item.id}`} className='font-semibold font-inter'>
                  {item.title}
                  </Link>
                  <p className=' text-gray-600 font-inter'>${item.price}</p>
                  <div className='flex items-center gap-2 mt-2'>
                    <button className='p-1 rounded-full hover:bg-gray-100 cursor-pointer'
                      onClick={() => {
                        dispatch(
                          updateReducer({
                          id: item.id,
                          quantity: Math.max(0, item.quantity - 1),}));
                      }}
                    >
                      <FaMinus size={16}/>
                    </button>
                    <span>{item.quantity}</span>
                    <button className='p-1 rounded-full hover:bg-gray-100 cursor-pointer'
                     onClick={()=> dispatch(
                      updateReducer({
                        id:item.id, 
                        quantity: Math.max(0, item.quantity + 1),}))} 
                        > <FaPlus size={16}/></button>
                    <div className='text-red-500 hover:text-red-700 cursor-pointer'>
                      <FaTrashAlt size={20} />
                    </div>
                  </div>
                  
                </div>
              </div>))}
            
          </div>
          <div className='lg:col-span-1 shadow-md p-4 rounded-md'>
            <div className='bg-white rounded-md'>
              <h3 className='text-xl font-bold mb-4'>Order Summary</h3>
              <div className='space-y-2 mb-4'>
                <div className='flex justify-between'>
                  <span className=''>Sub Total</span>
                  <span className=''>${total.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className=' flex justify-between pt-2 font-bold'>
                  <span>Total</span>
                  <span className='font-bold'>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className='w-full px-6 py-3 bg-zinc-300 rounded-lg cursor-progress hover:bg-zinc-400 font-bold hover:ease-linear duration-500'>Proceed to Checkout</button>
            </div>
          </div>

        </div>

      </div>
    </Container>
    </>
  )
}
