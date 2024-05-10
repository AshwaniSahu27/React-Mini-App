import React from "react";
import { MdOutlineRequestPage } from "react-icons/md";
import { MdDownloadForOffline } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, refer }) {
  return (
    <motion.div
      drag
      dragConstraints={refer}
      whileDrag={{scale:1.2}}
      dragTransition={{bounceStiffness:100,bounceDamping:10}}
      key={data.date}
      className="cursor-pointer relative overflow-hidden w-[180px] h-52 rounded-3xl bg-zinc-900 p-3 py-3 text-white flex justify-between flex-col "
    >
      <div className="flex flex-col gap-2">
        <MdOutlineRequestPage size="1.2rem" />
        <p className="text-zinc-100 leading-5 text-[15px] ">
          {data.description}
        </p>
      </div>

      <div className="footer absolute w-full left-0 bottom-0">
        <div className="flex justify-between gap-4 w-full px-2 py-3">
          <p className={data.fileSizeColor}>{data.fileSize}</p>
          {data.close ? (
            <IoMdCloseCircle color={data.iconColor} />
          ) : (
            <MdDownloadForOffline size="1.2rem" />
          )}
        </div>
        {data.tag.isOpen && (
  
            <div
              className={`download w-full h-8 ${data.tag.bgColor} flex justify-center items-center`}
            >
              <h3 className=" text-sm">{data.tag.insideData}</h3>
            </div>
     
        )}
      </div>
    </motion.div>
  );
}

export default Card;
