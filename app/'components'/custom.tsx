
"use client"
import React from 'react'
import { CustomButtonProps } from '../types';

function CustomButton({title, containerStyles, handleClick, btnType}: CustomButtonProps,) {


  return (
    <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton;