import React,{ useState } from 'react'

import Compo from './Components/Compo'
function App() {
  var deletetodo=()=>{
    var b=document.querySelectorAll("#div")
    b.forEach((e)=>{e.style.textDecoration="line-through";})
      }
  return (
  <div className=' w-full h-screen flex justify-center flex-col items-center flex-wrap select-none'>
    <p className='text-4xl text-gray-800 font-semibold pb-10'>WhatToDo App</p>
    <div className='  bg-slate-400 flex justify-center items-center flex-col p-5 h-auto w-56 rounded-2xl flex-wrap'>
    <p className=' pb-4 text-xl font-medium'>Todo</p>
    <Compo todo="Eat"/>
    <Compo todo="Sleep"/>
    <Compo todo="Code"/>
    <Compo todo="Play"/>
    <button className=' w-full text-center p-2 bg-gray-50 mt-3 rounded-2xl' onClick={deletetodo}>All complete</button>
    </div>
    </div>
  )
}

export default App
