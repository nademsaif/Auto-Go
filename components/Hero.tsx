"use client";
import Image from 'next/image'
import  CustomButton from './CustomButton'

import React from 'react'

const Hero = () => {
    const handleScroll = () => {

    }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Discover, reserve, or lease a car swiftly and conveniently.
            </h1>

            <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process.Simplify your car rental journey with our seamless booking procedure.</p>
            <CustomButton 
             title="Explore Cars"
             containerStyles="bg-primary-blue text-white rounded-full mt-10"
             handleClick={handleScroll}
            />
         </div>
         
         <div className='hero__image-container'>
            <div className='hero__image'>
              <Image src="/hero.png" alt='hero' fill className='object-contain'/>
              </div>
            <div className='hero__image-overlay'/>
            
         </div>
    </div>
  )
}

export default Hero