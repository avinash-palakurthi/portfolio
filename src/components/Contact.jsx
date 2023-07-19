import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full m-auto p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-white text-center ">
        Contact
      </h1>

      <form
        action="palakurthiavinash.career@gmail.com"
        method="POST"
        encType="multipart/form-data"
        className="max-w-[1040px] m-auto md:pl-20 p-4 py16"
      >
        <div className="flex flex-col py2">
          <label className="uppercase text-gray-300 font-semibold text-xl py-2 ">
            Name
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300 w-1/2"
            type="text"
            name="name"
          />
        </div>

        <div className="flex flex-col py2">
          <label className="uppercase text-gray-300 font-semibold text-xl py-2 ">
            Email
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300 w-1/2"
            type="email"
            name="email"
          />
        </div>

        <div className="flex flex-col py2">
          <label className="uppercase text-gray-300 font-semibold text-xl py-2">
            Subject
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300 w-1/2"
            type="text"
            name="Subject"
          />
        </div>

        <div className="flex flex-col py2">
          <label className="uppercase py-2 text-gray-300 font-semibold text-xl">
            Message
          </label>
          <textarea
            className="border-2 rounded-lg p-3 flex border-gray-300"
            rows={10}
            name="message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white mt-4 w-full p-4 rounded-md text-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
