import React from 'react'
import dognft from '../assets/dognft.jpg'
import { setGlobalState } from '../store'
import Identicon from 'react-identicons'


const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row w-4/5 justify-between items-center py-10  mx-auto  '>

        <div className=' md:w-3/6 w-full'>
            <div>
                <h1 className='text-white text-5xl font-bold'>Buy and Sell <br/> Degital Arts,<br/>
                <span className='text-gradient' > NFTs</span> Collections
                </h1>
                <p className='text-white opacity-60'>Mint and collection the hot test NFTs around</p>
            </div>
            <div>
                <button className='button rounded-xl text-white px-2 py-1 mt-2' onClick={()=> setGlobalState('modal', 'scale-100')}>Create NFT</button>
            </div>
            <ul className='flex justify-between items-center w-3/4 space-x-3 mt-6 min-w-max'>
                <li className='flex flex-col justify-between items-center text-white font-bold '>12k<span className='opacity-70 font-thin'>Users</span></li>
                <li className='flex flex-col justify-between items-center text-white font-bold '>152k<span className='opacity-70 font-thin'>Artwork</span></li>
                <li className='flex flex-col justify-between items-center text-white font-bold '>300k<span className='opacity-70 font-thin'>Artist</span></li>
            </ul>
            
            
        </div>

        <div className='m-2 md:w-2/5 w-full mt-10 md:mt-0 rounded-md overflow-hidden bg-blue-500'>
            <img className='h-60 w-full object-cover ' src={dognft} alt="photo-card" />
            <div className='flex flex-row justify-start items-center text-white px-2 mt-2'>
                <Identicon className="rounded-full m-2" size={40} string={'0xj...23r'}/>
                <div className='flex flex-col justify-start items-start'>
                    <small className='text-yellow'>@you</small>
                    <span className='text-white'>0x03....rwr3</span>
                </div>
            </div>
        </div>
    
    
    </div>
  )
}

export default Hero