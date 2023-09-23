"use client";
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';

const CustomButton = ({title, containerStyles, handleClick, btnType}: CustomButtonProps) => {
  return (
    <button 
    disabled={false}
    className={`custom-btn ${containerStyles}`}
    type={btnType || "button"}
    onClick={handleClick }
    >
        <span className='flex-1'>{title}</span>
    </button>
  )
}

export default CustomButton