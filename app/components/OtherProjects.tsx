import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  image: string | StaticImageData; // Accepts both string paths and StaticImageData
  title: string;
}

function OtherProjects({ title, image }: Props) {
  
    return (
      <div>
        <div className=" shadow-xl rounded-xl border-1 border-gray-400   m-5 p-3">
          <div className="flex p-4 min-w-50 max-w-200 lg:ml-6 lg:mt-10 lg:justify-start items-center justify-center">
            <Image src={image} alt="" width={680} height={100} />
          </div>
          <div className=" flex flex-col  lg:p-0 lg:ml-2  ">
            <h1 className="flex justify-center text-3xl m-5 mt-7 font-bold">{title}</h1>
            <div className="gap-3 flex justify-center text-sm ">
              <button className="btn-other">Ruby on Rails</button>
              <button className="btn-other">Postgress</button>
              <button className="btn-other">Bootstrap</button>
            </div>
            <button className="flex my-7 bg-orange-500 mx-10 py-4 justify-center text-white px-3   rounded-md lg:mt-5  ">
              See Project
            </button>
          </div>
        </div>
      </div>
    );
}

export default OtherProjects;