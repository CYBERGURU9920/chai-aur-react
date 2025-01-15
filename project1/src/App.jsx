import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")


  return (
    <>
    <div className='w-full h-screen duration-150'
    style={{backgroundColor:color}}>
     <button onClick={()=>setcolor("yellow")} className='bg-yellow-500 font-bold p-4 m-4'>yellow</button>
     <button onClick={()=>setcolor("blue")} className='bg-blue-500 font-bold p-4 m-4'>blue</button>
     <button onClick={()=>setcolor("pink")} className='bg-pink-500 font-bold p-4 m-4'>pink</button>
     <button onClick={()=>setcolor("green")} className='bg-green-500 font-bold p-4 m-4'>green</button>
     <button onClick={()=>setcolor("gray")} className='bg-gray-500 font-bold p-4 m-4'> gray</button>
     <button onClick={()=>setcolor("purple")} className='bg-purple-500 font-bold p-4 m-4'>purple</button>
     </div>
    </>
  )
}

export default App
