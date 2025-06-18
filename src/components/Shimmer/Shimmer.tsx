import React from "react";

const Shimmer = () => {
  return (
    <div className=" p-4 bg-zinc-100 flex flex-col items-center justify-center text-center rounded-md">
      <div className="bg-zinc-200 rounded-full h-[100px] w-[100px]" />
      <div className="mt-4 w-full">
        <div className="bg-zinc-300 p-2 max-w-full h-8 m-1"></div>
        <div className="bg-zinc-300 p-2 max-w-full h-8 m-1"></div>
      </div>
    </div>
  );
};

export default Shimmer;
