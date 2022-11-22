import React, { Component } from "react";
import ButtonSecondary from "./common/ButtonSecondary";

class Contact extends Component {
  state = {
    contact: {
      name: "",
      email: "",
      message: "",
    },
    errors: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const contact = { ...this.state.contact };
    contact[input.name] = input.value;

    this.setState({ contact });
  };
  render() {
    const { contact, errors } = this.state;
    return (
      <section className=" flex flex-col items-center justify-center py-[4rem]">
        <div className="grid grid-cols-1 lg:flex shadow-md shadow-black border-2 rounded-lg border-slate-600 gap-2 mx-4 lg:gap-8 p-8 space-between">
          <h1
            className="md:w-[25rem] text-slate-800 font-semibold my-auto"
            data-aos="slide-up"
          >
            Drop me a line. I would love to hear from you
          </h1>
          <form
            className="flex flex-col md:w-[25rem] gap-4 text-slate-600"
            data-aos="slide-down"
          >
            <h1 className="font-semibold text-[#f44336]">Get in touch</h1>
            <input
              className="h-8 p-4 rounded-lg border-[0.1rem] border-[#000c24]"
              type="text"
              placeholder="Name"
              value={contact.name}
              name="name"
              onChange={this.handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              className="h-8 p-4 rounded-lg border-[0.1rem] border-[#000c24]"
              value={contact.email}
              name="email"
              onChange={this.handleChange}
            />
            <textarea
              className="h-[10rem] p-4 rounded-lg border-[0.1rem] border-[#000c24]"
              type="text"
              placeholder="Message"
              value={contact.message}
              name="message"
              onChange={this.handleChange}
            />
            <div>
              <ButtonSecondary label="Send Message" />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
