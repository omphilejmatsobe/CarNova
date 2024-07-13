"use client"
import React, { use, useState } from 'react'
import SearchManufacturer from './SearchManufacturer'

export default function Search() {
    
    const [manufacturer, setManufacturer] = useState('');

    const handleSearch = () => {

    }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer
                manufacturer = {manufacturer}
                setManufacturer = {setManufacturer}

            />
        </div>
    </form>
  )
}