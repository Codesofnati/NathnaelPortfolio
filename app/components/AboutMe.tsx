import React from "react";

const AboutMe = () => {
  return (
    <div className="gap-3 lg:ml-20  py-20 flex flex-col">
      <h1 className="text-6xl font-bold text-orange-500 ">About me</h1>
      <p className="md:max-w-[700px] lg:text-xl text-gray-300 leading-[1.6]">
        I am a software developer with a background in JavaScript, CSS, HTML,
        React, Redux, Material UI, Ruby, and Ruby on Rails. I have also
        specialized in mobile app development using PHP, Flutter, and Dart. I
        have strong problem-solving skills, and I can learn new things quickly.
        I am looking for a fast-growing technology company or startup to which I
        can help and contribute as a Front-end developer, Back-end developer, or
        Full-stack developer.
      </p>
      <button className="my-5 bg-orange-500  text-white px-3 py-2 max-w-[200px] rounded-md lg:mt-20 ">My Resume</button>
    </div>
  );
};

export default AboutMe;
