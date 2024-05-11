import React, { useContext } from "react";
import { MdOutlineRequestPage } from "react-icons/md";
import { MdDownloadForOffline } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { themeContext } from "../context/themeContext";

function Card({ data, refer }) {
  const { isDark, changeColor } = useContext(themeContext);

  return (
    <motion.div
      drag
      dragConstraints={refer}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      key={data.date}
      className={`relative flex h-52 w-[180px] cursor-pointer flex-col justify-between overflow-hidden rounded-3xl bg-zinc-900 p-3 py-3 text-white ${isDark ? "" : "lighter"} `}
    >
      <div className="flex flex-col gap-2">
        <MdOutlineRequestPage size="1.2rem" />
        <p className=" text-[15px] leading-5 ">{data.description}</p>
      </div>

      <div className="footer absolute bottom-0 left-0 w-full ">
        <div className="flex w-full justify-between gap-4 px-2 py-3">
          <p
            className={`text--400`}
            style={{color:`${changeColor.isOpen ? changeColor.color1 : data.iconColor}`}}
          >
            {data.fileSize}
          </p>
          {data.close ? (
            <IoMdCloseCircle
              color={changeColor.isOpen ? changeColor.color1 : data.iconColor}
              size="1.2rem"
            />
          ) : (
            <MdDownloadForOffline size="1.2rem" color={changeColor.isOpen ? changeColor.color1 : data.iconColor}/>
          )}
        </div>
        {data.tag.isOpen && (
          <div
            className={`download h-8 w-full ${data.tag.bgColor} flex items-center justify-center`}
          >
            <h3 className=" text-sm">{data.tag.insideData}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
