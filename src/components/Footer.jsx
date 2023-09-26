import React from 'react'
import nftLogo from '../assets/nftLogo.png'

const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-between md:justify-center items-center gradient-bg-footer p-4'>
            <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4d'>
                <div className='flex flex-[0.25] justify-center imtes-center  ' >
                    <img className='rounded-xl w-32 cursor-pointer' src={nftLogo} alt="logo"  />
                </div>
                <div className='flex flex-1 justify-evenly items-center flex-wrap  sm:mt-0 mt-5 w-full text-white text-base text-center '>
                    <p className='cursor-pointer ' >Marckt</p>
                    <p className='cursor-pointer ' >Artists</p>
                    <p className='cursor-pointer ' >Features</p>
                    <p className='cursor-pointer ' >Community</p>
                </div>
                <div className='flex flex-[0.25] justify-center  items-center '>
                    <p className='text-white text-sm text-right'>&copy;2023 All right revsrved.</p>
                </div>
            </div>

    </div>
  )
}

export default Footer