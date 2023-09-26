import React from 'react'
import nftLogo from '../assets/nftLogo.png'


const Header = () => {
  return (
    <div className='w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto ' >

        <div className='md:flex-[0.5] flex-initial justify-center items-center'>
            <img className='rounded-xl w-32 cursor-pointer' src={nftLogo} alt="logo"  />
        </div>
        <ul className='md:flex-[0.5] text-white md:flex hidden list-none justify-between items-center'>
            <li className='mx-4 cursor-pointer'><a href="">Market</a></li>
            <li className='mx-4 cursor-pointer'><a href="">Atrist</a></li>
            <li className='mx-4 cursor-pointer'><a href="">Features</a></li>
            <li className='mx-4 cursor-pointer'><a href="">Community</a></li>
        </ul>

        <button className=' button rounded-xl py-2 px-2 text-white md:text-xs  font-bold m-3'> Connect Wallet</button>

    </div>
  )
}

export default Header