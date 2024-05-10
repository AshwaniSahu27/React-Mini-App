import { useState } from 'react'
import Backgroud from './components/Background'
import Foreground from './components/Foreground'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=' w-full h-screen bg-zinc-800 relative'>
        <Backgroud/>
        <Foreground/>
     </div>
    </>
  )
}

export default App
