import React,{useState} from 'react'

function Compo({todo}) {
  let [del, setDel]=useState("")

  
  return (
    <div className='flex justify-evenly items-center w-full '>
    <div id="div" className=' flex justify-start w-full flex-wrap'>
      <input type="checkbox" className=' cursor-pointer'/>
        <p className='p-2 max-w-fit max-h-fit'>{todo}</p>
        
    </div>
    <div className='flex justify-end items-center w-full flex-wrap '>
    <button>...</button>
    </div>
    
    </div>
  )
}

export default Compo