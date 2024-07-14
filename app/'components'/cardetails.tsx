import React, { Fragment } from 'react'
import { CarCardProps } from '../types'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'

interface CarDetailsProps{
    isOpen:boolean
    closeModal: () => void
    car: CarCardProps
}

const CarDetails = ({isOpen, closeModal, car}: CarDetailsProps) => {
  return (
    <>
        <Transition appear show={isOpen} as={Fragment}/>
            <Dialog as="div" className='relative z-10' onClose={closeModal}>
                <Transition.Child>
                    <div className='fixed inset-0 bg-black bg-opacity-15'/>
                </Transition.Child>
            </Dialog>
        <Transition/>   
    </>
  )
}

export default CarDetails