import React from 'react'
import Image from "next/image";

const Projects = () => {
  return (
    <div>
    <p className="p-10 mt-15 justify-center flex w-full lg:justify-center lg:max-w-[300px] lg:mx-10 text-4xl font-stretch-120% font-bold ">My Recent Works</p>
   <hr className="line text-gray-500 mx-6 lg:relative lg:left-65 lg:bottom-20 max-w-[700px]" />
   <div className="flex flex-col items-center mt-6 lg:items-start lg:flex-row">
     <div className= "flex pl-7 min-w-100 max-w-200 lg:w-700 lg:ml-6 lg:mt-10 lg:justify-start items-center justify-center">
       <Image src="/recipe1.png" alt="" width={680} height={100} />
     </div>
     <div className="items-center  flex flex-col p-7 lg:p-0 lg:ml-2  ">
       <h1 className="text-3xl m-5 mt-7">My Recipe</h1>
       <p className="text-xl pr-5 lg:max-w-[1500px] max-w-[800px]">
         This recipe app keeps track of all your recipes, ingredients,
         and inventory. It will allow you to save ingredients, keep track
         of what you have, create recipes, and generate a shopping list
         based on what you have and what you are missing from a recipe.
         The application is built using the Ruby on Rails framework.
       </p>
       <ul className="flex gap-4 w-full items-start justify-start">
       <li className="ul">Ruby on Rails</li>
       <li className="ul">Postgress</li>
       <li className="ul">Bootstrap</li>
     </ul>
     <button className=" my-5 bg-orange-500  text-white px-3 py-2 max-w-[200px] rounded-md lg:mt-20  "> See project</button>
     </div>
    
   </div>
 </div>
  )
}

export default Projects