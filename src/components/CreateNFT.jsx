import React, { useState } from 'react'
import boma from '../assets/boma.jpg'
import {FaTimes} from 'react-icons/fa'
import {setGlobalState, useGlobalState } from '../store'

const CreateNFT = () => {

    const [modal] = useGlobalState('modal')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description , setDescription] = useState('')
    const[fileUrl, setFileUrl] = useState('')
    const[imageBase64, setImageBase64] = useState(null)

    const hundlSubmit = (e) =>{
        e.preventDefault()
        if(!title || !price || !description ) return
        console.log('Minted...')
        colseModal()
    }
    const colseModal = () =>{
        setGlobalState ('modal', 'scale-0')
        resetForm()
    }
    const resetForm = ()=>{
        setFileUrl(null)
        setTitle('')
        setPrice('')
        setDescription('')
        setImageBase64(null)
    }

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-60 t  transform transition-transform duration-300 ${modal}`}>
        <div className='bg-[#476388] rounded-xl w-11/12 md:w-2/5 h-7/12 bg-opacity-90 p-6'>

           <form onSubmit={hundlSubmit}  className='flex flex-col '>
                <div className='flex flex-row justify-between items-center text-white '>
                    <p className='font-semibold'>#Add NFT</p>
                    <button>
                        <FaTimes size={25} color='white' className='focus:outline-none' onClick={colseModal}/>
                    </button>
                </div>

                <div className='flex flex-row justify-center items-center rounded-xl mt-5'>
                    <div className='shrink-0 rounded-xl overflow-hidden h-32 w-32'>
                        <img className='h-full w-full object-cover cursor-pointer ' src={imageBase64 || 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80'} alt="bome" />
                    </div>
                </div>
    

                    <div className='flex  justify-between itmes-center bg-gray-700 rounded-xl text-white mt-5' >
                        <label htmlFor="" className=' block' >
                            <span className='sr-only'>Choose Profile Photo</span>
                            <input className='block w-full rounded-xl text-slate-500  file:mr-4 file:py-2 file:rounded-full file:border-0 file:text-sm hover:file:bg-[#87add3] focus:outline-none cursor-pointer ' type="file" accept='image/png, image/jpg, image/jpeg, image/gif image/webp ' required />    
                        </label>
                        
                    </div>
                    <div className='flex justify-between itmes-center bg-gray-700 rounded-xl text-white mt-5' >
                        <input className='block w-full rounded-xl text-slate-500 focus:outline-none cursor-pointer bg-transparent focus:rign-0 border-0' type="text" name='title'  required  placeholder='Title' onChange={(e)=>setTitle(e.target.value)} value={title}/>     
                    </div>

                    <div className='flex justify-between itmes-center bg-gray-700 rounded-xl text-white mt-5' >
                        <input className='block w-full rounded-xl text-slate-500 focus:outline-none cursor-pointer bg-transparent focus:rign-0 border-0' type="number" name='price' min={0.01} step={0.01}  required  placeholder='Price (ETH)' onChange={(e)=> setPrice(e.target.value)} value={price}/>     
                    </div>

                    <div className='flex justify-between itmes-center bg-gray-700 rounded-xl text-white mt-5' >
                        <textarea className='block w-full rounded-xl text-slate-500 focus:outline-none cursor-pointer bg-transparent focus:rign-0 border-0 ' type="text" name='description'  required  placeholder='Description' onChange={(e)=>setDescription(e.target.value)} value={description}/>     
                    </div>

                    <button className='flex justify-center itmes-center p-2 mt-5 rounded-xl text-white font-semibold bg-[#c02d8f] hover:bg-[#811d60] w-full' >Mint Now</button>
           </form>
        </div>
    </div>
  )
}

export default CreateNFT