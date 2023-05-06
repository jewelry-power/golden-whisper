
import React from 'react'
import axios from 'axios';
import { useState,useEffect, createContext } from 'react';
export const PickedItems = createContext();
function Product({ children }) {
    const[jewel,setJewel]=useState(null)
    const [cartItems,setCart]=useState([])
    const baseURL= '  http://localhost:3200/items' 
    useEffect(() => {
    axios.get(baseURL).then((response) => {
        setJewel(response.data);
    });
}, []);
// console.log(jewel)
  if (!jewel) return null;
  
  function handelAddToCart(jewel){
    //   console.log(jewel)
      setCart([...cartItems,jewel])
      console.log(cartItems)
    }
  return (
    <div>
      <PickedItems.Provider value={{jewel, setJewel}}>
      {children}
    </PickedItems.Provider>

      <section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
        Product Collection
      </h2>

      <p class="mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p>
    </header>

    <div class="mt-8">
      <p class="text-sm text-gray-500">Showing <span> 4 </span> of 40</p>
    </div>

    <ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {
    jewel.map((jewel)=>(
    

<li>
<a href="#" class="group block overflow-hidden">
  <img
    src={jewel.imgSrc}
    alt=""
    class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
  />

  <div class="relative bg-white pt-3">
    <h3
      class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
    >
     {
        jewel.name
     }
    </h3>

    <p class="mt-2">
      <span class="sr-only"> Regular Price </span>

      <span class="tracking-wider text-gray-900"> {jewel.price}JOD </span>
    </p>
    <button
  type="button"
  class="inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out btnBg" onClick={()=>handelAddToCart(jewel)}>
  ADD TO CART
</button>
  </div>
</a>
</li>
    ))
}
    </ul>

    <ol class="mt-8 flex justify-center gap-1 text-xs font-medium">
      <li>
        <a
          href="#"
          class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
        >
          <span class="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="#"
          class="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
        >
          1
        </a>
      </li>

      <li
        class="block h-8 w-8 rounded border-black bg-black text-center leading-8 text-white"
      >
        2
      </li>

      <li>
        <a
          href="#"
          class="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
        >
          3
        </a>
      </li>

      <li>
        <a
          href="#"
          class="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
        >
          4
        </a>
      </li>

      <li>
        <a
          href="#"
          class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
        >
          <span class="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ol>
  </div>
</section>

 
    </div>
  )
}

export default Product