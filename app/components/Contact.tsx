import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row md:text-2xl lg:mx-20 lg:gap-14 ">
      <p className="text-3xl text-cyan-900 lg:text-4xl font-bold max-w-[700px] lg:max-w-[400px] lg:m-7 lg:p-1 text-center md:max-w-[300px] md:m-2 leading-[1.6]">
        If you would love to know more about my previous work and skills please
        put your message here!
      </p>

      <div>
        <form className="  flex p-3 md:min-w-[400px] flex-col gap-6 lg:min-w-[600px] text-sm lg:mt-7">
          <input className="input-border" type="text" placeholder="Full Name" />
          <input
            className="input-border"
            type="email"
            placeholder="Email Address"
          />
          <textarea
            className=" bg-gray-100 p-3 rounded-md h-25 "
            placeholder="Enter message here"
          />
          <button
            className="my-5 bg-orange-500  text-white px-3 py-2 max-w-[200px] rounded-md lg:mt-20  "
            type="submit"
          >
            Get in touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
