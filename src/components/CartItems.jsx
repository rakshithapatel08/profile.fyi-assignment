import React from 'react'
import Image from 'next/image'
import cartItems from '../atoms/cartState';
import { useRecoilState } from 'recoil';

const CartItems = ({items}) => {
  const [cart, setCart] = useRecoilState(cartItems);

  const increaseQuantity = () => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === items.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = () => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === items.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  const removeItem = () => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== items.id);
    setCart(updatedCart);
  };
  
  const calculateItemTotalPrice = (item) => {
    parseFloat(item.price.replace('$', ''))
    return parseFloat(item.price.replace('$', '')) * item.quantity;
  };
  return (
    <div className='flex justify-start gap-20 w-full items-center shadow-transparent shadow-sm'>
      <div><img src={`/${items.image}`} width={100} height={100} className='object-cover'/></div>
        <div className='flex gap-8'>          
          <div className='w-56'>
            <p className='text-slate-700 text-sm'>Premiere</p>
            <p className='text-slate-900 text-md'>{items.name}</p>
          </div>
        </div>
        <div className='flex gap-2 w-24'>
          <div><Image src="/minus.png" width={30} height={30} onClick={decreaseQuantity}/></div>
          <div className='text-lg'>{items.quantity}</div>
          <div><Image src="/plus.png" width={30} height={30} onClick={increaseQuantity}/></div>
        </div>
        <div className='w-24'> <p>Total: $ {calculateItemTotalPrice(items)}</p></div>
        <div><Image src="/cross.png" width={30} height={30} onClick={removeItem}/></div>
      </div>
  )
}

export default CartItems