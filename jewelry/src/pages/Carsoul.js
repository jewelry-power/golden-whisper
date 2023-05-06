import { Carousel } from 'flowbite-react'
import React, { Component } from 'react'
import ring from "../images/goldenRing.jpg"
import ringBlack from "../images/ringblack.jpg"
import earing from "../images/earing.jpg"
// import ringBlack from "../images/ringblack.jpg"
import tiara from "../images/diamondtiara.jpg"
import neckless from "../images/diamondrock.jpg"
import acient from "../images/small.jpg"
import handRing from "../images/handRing.jpg"


export class Section extends Component {
  render() {
    return (
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 aa rounded-none	">

        <Carousel className='rounded-none'>
          <img
            src={ringBlack}
            alt="..."
           className='h-63 rounded-none'
          />
          <img
            src={handRing}
            alt="..."
          />
          <img
            src={tiara}
            alt="..."
          />
          <img
            src={acient}
            alt="..."
          />
          <img
            src={earing}
            alt="..."
          />
        </Carousel>
      </div>
    )
  }
}

export default Section