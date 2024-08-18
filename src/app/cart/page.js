"use client"
import Image from 'next/image'
import React from 'react'
import cartItems from './../../atoms/cartState';
import { useRecoilState } from 'recoil';
import CartItems from '@/components/CartItems';

const Cart = () => {
  const [ cart, setCart ] = useRecoilState(cartItems)
  const totalPayment =()=>{
    let total = 0;
    cart.forEach(element => {
      total += element.quantity * parseFloat(element.price.replace('$', ''))
    });
    return total.toFixed(4);
  }
  {if(cart.length === 0){
    return (
      <p>empty</p>
    )
  }else{
    return (
      <div className='w-full'>
        <p className="text-[#7b5298] text-center font-bold text-4xl mb-10 mt-10">Your bag of chocolates are here.</p>
        <div className='flex w-full gap-10'><div>
        {cart.map((items)=><CartItems key={items.id} items={items}/>)}
          </div>
          <div className='w-1/4 h-56 bg-[#d5b8ce] rounded-md flex flex-col items-center'>
            <p className='text-center pt-8'>Order Summary</p>
            <div>
              <p className='mt-5'>Items : {cart.length}</p>
              <p> Total Amount : $ {totalPayment()}</p>
              <button className="bg-[#331e3c] text-white rounded-md p-3 text-md mt-2 w-48">Check out</button>
            </div>            
            </div></div>
      </div>
    )
  }
  }}
  

export default Cart