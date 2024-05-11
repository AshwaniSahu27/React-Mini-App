import React, { useContext, useRef, useState } from "react";
import Card from "./Card";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { themeContext } from "../context/themeContext";
import { RiSettings2Fill } from "react-icons/ri";


function Foreground() {
  const { isDark, setIsDark,setChangeColor,changeColor } = useContext(themeContext);

  const data = [
    {
      date: 1,
      description: "This is first data which is used to create.",
      fileSize: "2.56Mb",
      close: true,
      fileSizeColor: "text-green-400",
      iconColor: "darkgreen",
      tag: {
        isOpen: true,
        bgColor: "bg-blue-500",
        insideData: "Download Now",
      },
    },
    {
      date: 2,
      description:
        "This is first data which is used to create. If you don't know",
      fileSize: "1.96Mb",
      close: false,
      iconColor: "white",
      tag: {
        isOpen: false,
        bgColor: "bg-blue-500",
        insideData: "Download Now",
      },
    },
    {
      data: 3,
      description: "This is first data which....",
      fileSize: "2.26Mb",
      close: true,
      iconColor: "royalblue",
      tag: {
        isOpen: true,
        bgColor: "bg-green-500",
        insideData: "Click Me",
      },
    },
    {
      date: 4,
      description: "If you want to download with high resolution.",
      fileSize: "1.56Mb",
      close: true,
      iconColor: "royalblue",
      tag: {
        isOpen: true,
        bgColor: "bg-green-500",
        insideData: "Click Me",
      },
    },
  ];

  const ref = useRef(null);

  return (
    <div
      key={1}
      ref={ref}
      className="fixed z-10 flex h-screen w-full flex-shrink-0 flex-wrap gap-5  py-24 "
    >
      {data.map((value, idx) => {
        return <Card data={value} idx={idx} refer={ref} />;
      })}

      <div className=" fixed right-[0px] top-[0px] overflow-hidden h-28  w-40  flex items-center gap-2">
        <div className={`flex flex-col gap-3 my-2 ${changeColor.isOpen?"":"animate"} anim`}>
          <p
            className={`setting  z-30 flex h-8  w-8  cursor-pointer items-center justify-center  rounded-full text-xl  ${isDark ? "bg-slate-700 text-white" : " bg-slate-300"} `}
            onClick={() => {
              setChangeColor((prev)=>({...prev, isOpen:!prev.isOpen}));
            }}
          >
            <RiSettings2Fill />
            {/* &nbsp;{isDark ? "Light Mode" : "Dark Mode"} */}
          </p>
          <p
            className={` z-30 flex h-8 w-8  cursor-pointer items-center justify-center  rounded-full text-xl  ${isDark ? "bg-slate-700 text-white" : " bg-slate-300"} `}
            onClick={() => {
              setIsDark(!isDark);
            }}
          >
            {isDark ? <MdLightMode /> : <MdDarkMode />}
            {/* &nbsp;{isDark ? "Light Mode" : "Dark Mode"} */}
          </p>
        </div>

        <div className={`${changeColor.isOpen?"":"animate"} anim h-[70px]  w-28 bg-slate-300 rounded-sm flex justify-around items-center flex-col`}>
          <h1 className=" text-yellow-700">Change Color</h1>
           <ul className="flex gap-1">
            <li className=" w-[22px] h-[22px] rounded-full" style={{backgroundColor:"yellowgreen"}} onClick={()=>{
              setChangeColor((prev)=>({...prev,color1:"yellowgreen",color2:"cadetblue"}))
            }} ></li>
            <li className=" w-[22px] h-[22px] bg-yellow-700 rounded-full" onClick={()=>setChangeColor((prev)=>({...prev,color1:"teal"}))}></li>
            <li className=" w-[22px] h-[22px] bg-blue-700 rounded-full" onClick={()=>setChangeColor((prev)=>({...prev,color1:"Orchid"}))}></li>
            <li className=" w-[22px] h-[22px]   bg-green-700 rounded-full" onClick={()=>setChangeColor((prev)=>({...prev,color1:"chocolate"}))}></li>
           
           </ul>
        </div>
      </div>
    </div>
  );
}

export default Foreground;
