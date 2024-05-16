import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color,setColor]=useState('white')

  const handleColorChange =(newColor)=>{
    setColor((prevColor) => prevColor=== newColor ? 'white' : newColor)
  }
  return (
    <>
    <div className=" w-full h-screen" style={{backgroundColor:color}}>
      <div className='justify-center fixed flex flex-wrap bottom-12 inset-x-0 py-3 px-2 '>
        <div className='bg-white py-3 px-5 rounded-2xl border shadow-2xl shadow-gray-800'>
          <button className='mx-2 px-3 font-medium	py-2 rounded-xl' onClick={()=>handleColorChange("red")} style={{backgroundColor:'red'}}>Red</button>
          <button className='mx-2 px-3 font-medium	 py-2 rounded-xl'onClick={()=>handleColorChange("green")} style={{backgroundColor:'green'}}>Green</button>
          <button className='mx-2 px-3 font-medium	py-2 rounded-xl' onClick={()=>handleColorChange("pink")} style={{backgroundColor:'pink'}}>Pink</button>
          <button className='mx-2 px-3 font-medium	py-2 text-white rounded-xl' onClick={()=>handleColorChange("blue")} style={{backgroundColor:'blue'}}>Blue</button>
          <button className='mx-2 px-3 font-medium	py-2 text-white rounded-xl' onClick={()=>handleColorChange("black")}  style={{backgroundColor:'black'}}>Black</button>
          <button className='mx-2 px-3 font-medium	py-2 rounded-xl' onClick={()=>handleColorChange("lavender")} style={{backgroundColor:'lavender'}}>Lavender</button>
          <button className='mx-2 px-3 font-medium	py-2 rounded-xl' onClick={()=>handleColorChange("grey")} style={{backgroundColor:'grey'}}>Grey</button>
          <button className='mx-2 px-3 font-medium	py-2 rounded-xl' onClick={()=>handleColorChange("yellow")} style={{backgroundColor:'yellow'}}>Yellow</button>
          <button className='mx-2 px-3 font-medium	py-2 rounded-xl' onClick={()=>handleColorChange("pink")} style={{backgroundColor:'pink'}}>Pink</button>
          <button className='mx-2 px-3 font-medium	py-2 rounded-xl' onClick={()=>handleColorChange("olive")} style={{backgroundColor:'olive'}}>Olive</button>
          <button className='mx-2 px-3 font-medium	py-2 text-white rounded-xl' onClick={()=>handleColorChange("purple")} style={{backgroundColor:'purple'}}>Purple</button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
