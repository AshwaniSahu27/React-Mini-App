import { useState } from "react";
import Backgroud from "./components/Background";
import Foreground from "./components/Foreground";
import { themeContext } from "./context/themeContext";


function App() {
  const [isDark, setIsDark] = useState(true);
  const [changeColor,setChangeColor] = useState({
    isOpen:false,
    color1:"yellowgreen",
    color2:"cadetblue"
  })
  
  return (
    <>
      <themeContext.Provider value={{isDark, setIsDark,changeColor,setChangeColor}}>
        <div className=" relative h-screen w-full bg-zinc-800">
          <Backgroud />
          <Foreground />
        </div>
      </themeContext.Provider>
    </>
  );
}

export default App;
