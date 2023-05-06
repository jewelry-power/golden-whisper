import React from 'react'
import firstImg from "../prodImg/earrings.jpg"
import secondImg from "../prodImg/What's New.png"
import thirdImg from "../prodImg/Green and Brass _.jpg"
import fourthImg from "../prodImg/Beautiful Gorgeous Ear cuffs,Diamond Ear jewellery,Women's demand ornaments,Aesthetic accessories.jpg"
import fifthImg from "../prodImg/Rainbow version of our sphere ring __ custom cut sapphires 🌈.jpg"
import sixthImg from "../prodImg/Urban Outfitters.jpg"
import seventhImg from "../prodImg/Brighton Jewelry Store.jpg"
function ProductHome() {
  return (
    <div class="relative overflow-hidden bg-white">
    <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div class="sm:max-w-lg">
          <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Golden Whisper</h1>
          <p class="mt-4 text-xl text-gray-500">Welcom to our shop,Golden Whisper is an online jewelry boutique that has the elegant jewels from  different brands all you have to do is pick what you want then we will deliver it you where ever you are   </p>
          <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white mt-5 hover:bg-indigo-700 prodBtn">Shop Collection</a>
        </div>
        <div>
          <div class="mt-10">
      
            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 prodImg">
                    <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img src={sixthImg}/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={firstImg}/>
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 prodImg">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={secondImg}/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={fourthImg}/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={fifthImg}/>
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 prodImg">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={thirdImg}/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src={seventhImg}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
           
          </div>
        </div>
      </div>
    </div>
  </div>
  
  


  )
}

export default ProductHome