"use client"
import React, { use, useState } from 'react'
import SearchMake from './SearchManufacturer';
import Image from 'next/image';

const SearchButton = ({otherClasses}: {otheClasses: string}) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/images/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
  />
</button>
);
export default function Search() {
    
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState();

    const handleSearch = () => {

    }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchMake
                manufacturer = {manufacturer}
                setManufacturer = {setManufacturer}
            />
            <SearchButton otherClasses="sm:hidden"/>
        </div>

        <div className='searchbar__item'>
        <Image
          src='/images/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan...'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />

    </form>
  )
}