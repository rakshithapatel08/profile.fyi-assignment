"use client"
import Image from 'next/image'
import React from 'react'
import { useRecoilState } from 'recoil'
import cartItems from './../atoms/cartState';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [cart, setCart ] = useRecoilState(cartItems)
  const router = useRouter()
  return (
    <div className='flex justify-between items-center pt-10'>
      <p className='text-purple-950 text-2xl font-bold'>Cadbury</p>
      <div onClick={()=>router.push("/cart")}>
      <Image src="/cart-purple.png" width={35} height={20} className='relative'/>
      <div className='absolute top-8 right-32 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center'><p>{cart.length}</p></div>
      </div></div>
  )
}

export default Navbar