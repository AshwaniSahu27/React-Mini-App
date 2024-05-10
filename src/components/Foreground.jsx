import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const data = [
    {
      date: 1,
      description: "This is first data which is used to create.",
      fileSize: "2.56Mb",
      close: true,
      fileSizeColor: "text-green-400",
      iconColor: "green",
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
      fileSizeColor: "text-zinc-400",
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
      fileSizeColor: "text-blue-400",
      iconColor: "rgb(32 114 203)",
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
      fileSizeColor: "text-blue-400",
      iconColor: "rgb(32 114 203)",
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
      className="  fixed z-10 flex h-screen w-full flex-shrink-0 flex-wrap gap-5 p-5 "
    >
      {data.map((value, idx) => {
        return <Card data={value} idx={idx} refer={ref} />;
      })}
    </div>
  );
}

export default Foreground;
