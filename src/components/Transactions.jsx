import React from 'react'
import {BiTransfer} from 'react-icons/bi'
import {MdOpenInNew} from 'react-icons/md'
 
const Transactions = () => {
  return (
    <div className='bg-[#4a35c5]'>
      
        <div className='w-4/5 py-10 mx-auto'>
          <h4 className='w-4/5 py-10 mx-auot text-gradient text-3xl font-bold uppercase'>
          Latest Transactions
          </h4>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4  lg:gap-2 py-2.5'>
              {Array(6).fill().map((tan, i) =>
                <Transaction key={i} tan={tan}/>
                )}
          </div>
          <div className='text-center my-3 pb-3' >
            <button className='text-white  bg-[#c02d8f] hover:bg-[#811d60] rounded-full  px-1.5 py-1 '>
              Load More
            </button>
          </div>
        </div>
    </div>
  )
}

const Transaction =({tan}) =>{
  return(
    <div className='flex justify-between items-center border border-pink-500 text-gray-500 w-full rounded-lg bg-gray-800 my-2 p-3 overflow-hidden '>
      <div className='border border-pink-500 rounded-md p-2   '>
        <BiTransfer/>
      </div>
      <div>
        <h4 className='text-sm'>#{tan} Fund Transfered</h4>
        <small className='flex justify-start items-center'>
          <span className='mr-1'>Received by</span>
          <a className='text-pink-500 mr-1' href="#" target='_blank'>0x3....rwsd3</a>
          <MdOpenInNew/>
        </small>
      </div>
      <p className='text-sm font-medium text-white'>0.3 ETH</p>
    </div>
  )
}

export default Transactions