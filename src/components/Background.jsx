import React from "react";

function Background() {
  return (
    <>
      <div className=" fixed z-[1] w-full h-screen">
        <div className=" w-full py-5 flex justify-center font-semibold text-xl text-zinc-500 absolute top-5">
          Documents
        </div>
        <h1 className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-semibold tracking-tighter text-zinc-900 ">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
