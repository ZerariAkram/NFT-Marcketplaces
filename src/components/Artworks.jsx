import React from 'react'
import monky from '../assets/monky.jpg'
import { setGlobalState } from '../store'

const Artworks = () => {
  return (
    <div className='gradient-bg-artworks'>

        <div className='w-4/5 py-10 mx-auto'> 
            <h4 className=' text-gradient text-3xl font-bold uppercase'>
                Latest Artwork
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-2 py-2.5'>
                {Array(6).fill().map((nft, i)=>(
                    <Card key={i} nft={nft} />
                    ))}
            </div>
            <div className='text-center' >
                <button className='text-white  bg-[#c02d8f] hover:bg-[#811d60] rounded-full  px-1.5 py-1 '>
                  Load More
                </button>
          </div>
        </div>
    </div>
  )
}

const Card = ({nft}) =>{
   return(
        <div className='m-2  w-full  shadow-xl rounded-md object-cover bg-gray-800 my-2 p-3'>
        <img className='h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3' src={monky} alt={'monky nft'} />
        <h4 className='text-white font-semibold'>NFT #{nft}</h4>
        <p className='text-gray-400 text-sm my-2'>Description for nft</p>

        <div className='flex justify-between itmes-center mt-3 text-white'>
            <div className='flex flex-col '>
                <small className='text-xs'>Current Price</small>
                <p className='text-sm font-semibold'>0.4 ETH</p>
            </div>
            <button className='text-white bg-[#c02d8f] hover:bg-[#811d60] rounded-full  px-1.5 py-1 text-sm ' onClick={()=> setGlobalState('showmodal','scale-100')}>View Ditails</button>
        </div>
        </div>
   )
}



export default Artworks