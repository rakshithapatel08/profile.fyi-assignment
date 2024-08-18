"use client"
import Image from "next/image";
import products from "./products.json"
import { useRecoilState } from "recoil";
import cartItems from "../atoms/cartState"

export default function Home() {
  const [ items, setItems ] = useRecoilState(cartItems)

  const addToCart = (selectedItem) =>{
    if(items.findIndex(product => product.id === selectedItem.id) === -1){
      let selectedUpdate = {...selectedItem,quantity:1}
      let updatedCart = items.concat(selectedUpdate)
      setItems(updatedCart)
      console.log(items)
    }
    else{
      setItems(previous =>{
        return items.map(items=>{
          return items.id === selectedItem.id ? {...items,quantity:items.quantity+1} : items
        })
      })
    }
    
  } 
  return (
    <div className="mt-16">
    <p className="text-[#7b5298] text-center font-bold text-4xl mb-20 mt-10">Sweeten your celebrations with Cadbury</p>
    <div className="grid grid-cols-3 gap-4 grid-rows-[500px_500px_500px_500px] w-full mb-16">
      {products.map(p=>{
        return(
            <div key={p.id} style={{ backgroundColor: p.bg }} className={`flex justify-center items-center flex-col pl-4 pr-4 rounded-lg`}>
              <Image src={`/${p.image}`} width={250} height={250} className="object-cover"/>
              <p className="text-slate-900 text-2xl pt-3 pl-4 pr-4">{p.name}</p>
              <p className="text-slate-700 text-md pt-2 pl-4 pr-4">{p.description}</p>
              <p className="text-slate-900 text-xl pt-4 pl-4 pr-4">{p.price}</p>
              <button className="bg-[#331e3c] text-white rounded-md p-3 text-md mt-2" onClick={()=>addToCart(p)}>Add to cart</button>
            </div>
        )
        })}
    </div>
    </div>
  )}