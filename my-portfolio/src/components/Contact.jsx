import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <section className=" flex flex-col items-center justify-center py-[4rem]">
        <div className="grid grid-cols-1 lg:flex shadow-md shadow-black rounded-lg border-[#000c24] gap-2 lg:gap-8 p-8 space-between">
          <h1 className="w-[15rem] text-slate-800 font-semibold">
            Drop me a line. I would love to hear from you
          </h1>
          <form className="flex flex-col md:w-[30rem] gap-4">
            <input
              className="h-8 p-4 rounded-lg border-[0.1rem] border-[#000c24]"
              type="text"
              placeholder="Name"
            />
            <input
              type="email"
              placeholder="Email"
              className="h-8 p-4 rounded-lg border-[0.1rem] border-[#000c24]"
            />
            <textarea
              className="h-[10rem] p-4 rounded-lg border-[0.1rem] border-[#000c24]"
              type="text"
              placeholder="Message"
            />
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
