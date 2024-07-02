import { useState } from 'react'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className=" flex justify-center px-11 " >
        <ul class="px-11 py-2 my-12 flex space-x-11 justify-between bg-slate-300 rounded-lg ">
            <li class="cursor-pointer bg-red-600 px-2 rounded-full"> <button className="px-2" onClick={()=>setColor("red")}>Red</button> </li>
            <li class="cursor-pointer bg-cyan-400 px-4 rounded-full"><button className="px-2" onClick={()=>setColor("Cyan")}>Cyan</button></li>
            <li class="cursor-pointer bg-green-500 px-4 rounded-full"><button className="px-2" onClick={()=>setColor("Green")}>Green</button></li>
            <li class="cursor-pointer bg-orange-600 px-4 rounded-full"><button className="px-2" onClick={()=>setColor("#e0482d")}>Orange</button></li>
            <li class="cursor-pointer bg-black px-4 text-white rounded-full"><button className="px-2" onClick={()=>setColor("Black")}>Black</button></li>
            <li class="cursor-pointer bg-white px-4 rounded-full"><button className="px-2" onClick={()=>setColor("white")}>White</button></li>
        </ul>
      </div>
    </div>
    
  )
}

export default App
