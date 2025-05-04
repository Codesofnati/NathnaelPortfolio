import React from 'react'

const Skills = () => {
  return (
    <div className='p-30 flex justify-center items-center flex-col gap-6 '>

      <h1 className='text-orange-500 text-6xl font-bold '>Skills</h1>
      <div className='flex justify-center items-center flex-col gap-6 md:flex-row md:items-start md:gap-12 lg:gap-30 '>
      <ul className='flex justify-center text-xl gap-5 items-center flex-col'>
        <li className='font-bold text-3xl'>Language</li>
        <li>Typescript</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>Dart</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <ul className='flex justify-center text-xl gap-5 items-center flex-col'>
        <li className='font-bold text-3xl'>Framworks</li>
        <li>React</li>
        <li>Tailwind</li>
        <li>NextJs</li>
        <li>Flutter</li>
        <li>Material UI</li>

      </ul>
      <ul className='flex justify-center text-xl gap-5 items-center flex-col'>
        <li className='font-bold text-3xl'>Other Skills</li>
        <li>Gitflow</li>
        <li>Teamwork</li>
        <li>Collabrations</li>
        <li>Testing</li>
        <li>Communication</li>
      </ul>
      
      </div>
    
    </div>
  )
}

export default Skills