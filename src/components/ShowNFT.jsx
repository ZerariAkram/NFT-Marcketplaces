import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Identicon from 'react-identicons'
import boma from '../assets/boma.jpg'
import { setGlobalState, useGlobalState } from '../store'

const ShowNFT = () => {

    const [modal] = useGlobalState('showmodal')

    const ChangePrice  = ()=>{
        setGlobalState('updatemodal', 'scale-100')
    }
    const handleSubmit = ()=>{
        colseModal()
    }
    const colseModal = ()=>{
        setGlobalState('showmodal', 'scale-0')
    }
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-60 transation-transform transform duration-300 ${modal}` }>
       <div className='bg-[#476388] rounded-xl w-11/12 md:w-2/5 h-7/12 -bg-opacity-80 p-6'>
            <div className='flex flex-col'>
                <div className='flex flex-row justify-between items-center text-white'>
                    <p>Buy NFY</p>
                    <button  className='border-0 bg-transparent focus:outline-none' onClick={colseModal}><FaTimes/></button>
                </div>
                <div className='flex flex-row justify-center items-center rounded-xl mt-5'>
                   <div className='shrink-0 overflow-hidden h-32 w-32 rounded-xl'>
                        <img src={boma} alt="nft" />
                   </div>
                </div>

                <div className='text-white mt-5'>
                    <h4 className='font-bold'>Glacia Man</h4>
                    <p className='text-gray-900 text-sm  '>Description for  this Nft,Buy and Sell </p>
                </div>

                <div className='flex justify-between items-center mt-5'>
                    <div className='flex justify-start items-center  '>
                        <div className='flex justify-start items-center space-x-3'>
                            <Identicon string={'0xe...345'} className="rounded-full" size={40}   />
                            <div className='flex flex-col'>
                                <p className='text-white font-bold'>@awner</p>
                                <span className='text-pink-800 text-sm'>0xe...3453</span>
                            </div>
                        </div>   
                    </div>
                    <div className='text-white   '>
                        <small className='text-sm'>Currert Price</small>
                        <p className='text-sm font-semibold'>1.9 ETH</p>
                    </div>
                </div>
                <div className='flex justify-between items-center space-x-2'>
                    <button className='flex justify-center items-center w-full text-white font-semibold mt-5 rounded-xl py-2 px-2 bg-[#c02d8f] hover:bg-[#811d60]'>Pruchase Now</button>
                    <button className='flex justify-center items-center w-full text-white font-semibold mt-5 rounded-xl py-2 px-2 bg-[#c02d8f] hover:bg-[#811d60]' onClick={ChangePrice}>Change Price</button>
                </div>

            </div>
       </div>
    </div>
  )
}

export default ShowNFT