
import React from "react";

import DashBoard from "./DashBoard";
import Projects from "./Projects";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import OtherProjects from "./OtherProjects";
const HomePage = () => {
  return (
    <div className="mt-25 w-full ">
      <section id="dashbord" className="  h-160 w-full gap-4 text-white">
       <div>
       <DashBoard/>
       </div>
      </section>
      <section
        id="projects"
        className=" bg-white text-black">
       <div>
        <Projects/>
       <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1500px]
 ">
       <OtherProjects title="My Recipe" 
  image="/recipe1.png"    />
        <OtherProjects title="Btracker" 
  image="/Btracker.webp"   />
  <OtherProjects title="Live Crypto" 
  image="/crypto.webp"    />
        <OtherProjects title="Space Travelers Hub" 
  image="/space.webp"   />
        <OtherProjects title="kCinema" 
  image="/kciniema.webp"   />
  <OtherProjects title="Bookstore" 
  image="/bookstore.webp"    />
        <OtherProjects title="Tv Show" 
  image="/tvshow.webp"   />
       </div>
       </div>
      </section>
      <section id="about" className=" py-25 px-7 ">
       <AboutMe/>
      </section>
      <hr className="line mx-7 p-5"></hr>
      <section
        id="skills" className="text-white mb-10">
       <div>
        <Skills/>
       </div>
      </section>
     
      <section id="contact" className="  h-170 w-full text-black  bg-white py-25 px-2 ">
       <div>
        <Contact/>
       </div>
      </section>

    </div>
  );
};

export default HomePage;
