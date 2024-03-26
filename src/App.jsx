import { useState } from "react";


function App() {
  const [color, setColor] = useState('black');

  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 rounded-full text-white shadow-lg bg-black" onClick={()=>setColor('black')}>black</button>
            <button className="outline-none px-4 rounded-full text-white shadow-lg bg-green-400" onClick={()=>setColor('green')}>green</button>
            <button className="outline-none px-4 rounded-full text-white shadow-lg bg-red-400"onClick={()=>setColor('red')}>red</button>
            <button className="outline-none px-4 rounded-full text-white shadow-lg bg-blue-400"onClick={()=>setColor('blue')}>blue</button>
            <button className="outline-none px-4 rounded-full text-black shadow-lg bg-white"onClick={()=>setColor('white')}>white</button>
            <button className="outline-none px-4 rounded-full text-white shadow-lg bg-yellow-400"onClick={()=>setColor('yellow')}>yellow</button>
            <button className="outline-none px-4 rounded-full text-white shadow-lg bg-pink-300"onClick={()=>setColor('pink')}>pink</button>
            <button className="outline-none px-4 rounded-full text-white shadow-lg bg-slate-400"onClick={()=>setColor('lavender')}>lavender</button>
          </div>
        </div>
     </div>
     
      
  
    </>
  )
}

export default App
