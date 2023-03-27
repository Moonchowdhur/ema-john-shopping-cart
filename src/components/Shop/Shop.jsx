import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Product from '../Product/Product';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([])
    const[show,setShow]=useState(false)
    function addToCart(product){
        setCart([...cart,product])
    }
    
   function seeMore(){
    setShow(true)
   }
    useEffect(()=>{
        fetch("products.json")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <>
        <div className='md:flex'>
            <div className='md:w-[80%] gap-4 py-5 px-5 grid grid-cols-1 md:grid-cols-3 bg-slate-100'>
             {
                products.slice(0,show?products.length:16).map(product=><Product product={product} addToCart={addToCart} key={product.id}></Product>)
             }
            </div>
            <div className='md:w-[20%] px-3  py-5 text-fuchsia-900  bg-violet-100'>
             <h2 className='text-3xl font-bold text-center '>Order Summary</h2>
             <div className='border-2 rounded-md border-black p-2 my-12 mx-2'>
            <h2 className='my-4'>Selected Items: {cart.length}</h2>
             <h2 className='my-2'>Total Price: $</h2>
             <h2 className='my-2'>Total Shipping Charge: $</h2>
             <h2 className='my-2'>Tax: $</h2>
             <h2 className='my-2 text-xl font-semibold'>Grand Total: $</h2></div>
             <button  className="btn bg-fuchsia-900 w-full">Clear Cart
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg> </button>
            <button className="btn text-black mt-4 bg-[#D5B4B4] hover:text-white w-full">Review Order
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg></button>
            </div>
          
        </div>
       {!show && (<p onClick={seeMore}>
        <Button>See more</Button>
        </p>)}
         
        </>
    );
};

export default Shop;