'use client'
import React, { useState } from 'react'

const Page = () => {
  const [data, setData]=useState<string>("")


  return (
    <div className="flex items-center justify-center">
      <div className="  items-center justify-center max-w-[400px] m-4 rounded-lg p-10 shadow-lg shadow-amber-50 bg-transparent">
        <form  className="flex flex-col gap-2">
          <h1 className="text-[20px] font-bold text-center p-2">Form Page</h1>
          <input
            placeholder="Your Name"
            type="text"
            onChange={(e) => setData(e.target.value)}
            className="outline rounded  px-2 py-1"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-2 py-1 rounded  hover:bg-blue-700"
          >
            Add
          </button>

        </form>
        <ul>
          <li>{data}</li>
        </ul>
      </div>
    </div>
  );
}

export default Page