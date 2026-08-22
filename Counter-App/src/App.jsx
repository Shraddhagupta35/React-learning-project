import React from 'react'
import { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 text-center bg-amber-200 rounded-lg p-6 sm:p-8 md:p-10 mt-20'>
     <div className='mb-10'>
      <h1 className='text-2xl font-semibold'>Quick Counter</h1>
      <p className='font-semibold text-gray-700'>Simple And Intuitive Counting</p>
     </div>
     <div className={`my-4 w-40 h-40 mx-auto bg-gray-300 rounded-xl font-bold text-4xl flex items-center justify-center 
     ${count > 10 ? "text-green-600" : count > 5 ? "text-red-600" : "text-black"}`}>
      {count}
     </div>

     {
      count === 20 && (
        <p className='text-blue-800 font-semibold'>Maximum Limit Reached</p>
      )
     }

     <div className='flex flex-wrap justify-center gap-4 sm:gp-6 md:gap-8 lg:gap-10 text-xl'>
      <div className='flex flex-col items-center'>
        <button 
         onClick={() => {
          if(count > 0)
          setCount(count-1)}}
         className='bg-red-600 p-3 m-2 rounded hover:scale-110 transition'><FaMinus /></button>
        <span className='text-lg'>Decrement</span>
      </div>
      <div className='flex flex-col items-center'>
        <button 
         onClick={() => setCount(0)}
         className='bg-blue-600 p-3 m-2 rounded hover:scale-110 transition'><RiResetLeftLine /></button>
        <span className='text-lg'>Reset</span>
      </div>
      <div className='flex flex-col items-center'>
        <button 
         onClick={() => {
          if(count < 20)
            setCount(count+1) 
         }}
         className='bg-green-600 p-3 m-2 rounded hover:scale-110 transition'><FaPlus /></button>
        <span className='text-lg'>Increment</span>
      </div>
     </div>


    </div>
  )
}

export default App