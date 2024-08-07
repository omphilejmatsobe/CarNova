"use client"
import React, { useState } from 'react'
import { CarCardProps } from '../types'
import CustomButton from './custom'
import { CarRental } from '../utils'
import Image from 'next/image'
import CarDetails from './cardetails'

interface CarCard{
    car: CarCardProps
}

const Carcard = ({car}: CarCardProps ) => {

    const [isOpen, setIsOpen] = useState(false);
    const {city_mpg, year, make, model, transmission, drive} = car;

    const carRentalAmount = CarRental(city_mpg, year);

    return (
        <div className="car-card group">
        <div className="car-card__content">
          <h2 className="car-card__content-title">
            {make} {model}
          </h2>
        </div>
  
        <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
          <span className='self-start text-[14px] leading-[17px] font-semibold'>R</span>
          {carRentalAmount}
          <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
        </p>
  
        <div className='relative w-full h-40 my-3 object-contain'>
          <Image src='/images/hero.png' alt='car model' fill priority className='object-contain' />
        </div>
  
        <div className='relative flex w-full mt-2'>
          <div className='flex group-hover:invisible w-full justify-between text-grey'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image src='/images/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
              <p className='text-[14px] leading-[17px]'>
                {transmission === "a" ? "Automatic" : "Manual"}
              </p>
            </div>
            <div className="car-card__icon">
              <Image src="/images/tire.svg" width={20} height={20} alt="seat" />
              <p className="car-card__icon-text">{drive.toUpperCase()}</p>
            </div>
            <div className="car-card__icon">
              <Image src="/images/gas.svg" width={20} height={20} alt="seat" />
              <p className="car-card__icon-text">{city_mpg} MPG</p>
            </div>
          </div>
  
          <div className="car-card__btn-container">
            <CustomButton
              title='View More'
              containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
              textStyles='text-white text-[14px] leading-[17px] font-bold'
              rightIcon='/images/right-arrow.svg'
              handleClick={() => setIsOpen(true)}
            />
          </div>

          <CarDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car}/>
        </div>
    </div>
  )
}

export default Carcard