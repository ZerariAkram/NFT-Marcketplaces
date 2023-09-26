import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import boma from '../assets/boma.jpg'
import { setGlobalState, useGlobalState } from '../store'
const Update = () => {

    const[updatemodal] = useGlobalState('updatemodal')
    const[price, setPrice] = useState('')

    const handleSubmit = () =>{
        e.preventDefault()

        if(!price) return
        console.log('Update...')
        closeModel()
    }
    const closeModel = ()=>{
        setGlobalState('updatemodal', 'scale-0')
        resetform()
    }
    const resetform =()=>{
        setPrice('')
    }


  return (
    <div className={`fixed h-screen w-screen top-0 left-0 flex justify-center items-center transform transition-transform duration-300 bg-black bg-opacity-60 ${updatemodal}`}>
        <div className=' bg-[#476388] w-11/12 md:w-2/5 h-7/12 rounded-xl bg-opacity-90 p-6' >
            <form onSubmit={handleSubmit} action="">
                <div className='text-white flex justify-between items-center'>
                    <p>Candy Twon</p>
                    <button className='bg-transparent' onClick={closeModel}><FaTimes/></button>
                </div>
                <div className='flex flex-row justify-center items-center rounded-xl mt-5'>
                    <div className='shrink-0 overflow-hidden rounded-xl h-32 w-32'>
                        <img className='w-full h-full  cursor-pointer' src={boma} alt="" />
                    </div>
                </div>
                <div className='flex justify-between items-center rounded-xl bg-gray-500 text-white mt-5'>
                    <input type="number" className='w-full rounded-xl' />
                </div>
                <button className='w-full px-2 py-2 text-white rounded-xl mt-5 bg-[#c02d8f] hover:bg-[#811d60]' >Update Now</button>
            </form>
        </div>
    </div>
  )
}

export default Update