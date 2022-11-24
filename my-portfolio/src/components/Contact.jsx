import React, { Component } from "react";
import ButtonSecondary from "./common/ButtonSecondary";
import Joi from "joi-browser";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

class Contact extends Component {
  state = {
    contact: {
      sender_name: "",
      sender_email: "",
      message: "",
    },
    errors: {},
  };

  emailParams = {
    SERVICE_ID: "service_dl8bg3m",
    TEMPLATE_ID: "template_s7xagh8",
    USER_ID: "44i3JQ3-FcQiMKcnv",
  };

  schema = {
    sender_name: Joi.string().min(2).required().label(`Name`),
    sender_email: Joi.string().email().required().label(`Email`),
    message: Joi.string().min(2).required().label(`Message`),
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.contact, this.schema, options);

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateOnChange = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const contact = { ...this.state.contact };
    contact[input.name] = input.value;

    const errors = { ...this.state.errors };
    const errorMessage = this.validateOnChange(input);

    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    this.setState({ contact, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate();
    this.setState({ errors: error || {} });
    if (error) return;

    emailjs
      .sendForm(
        this.emailParams.SERVICE_ID,
        this.emailParams.TEMPLATE_ID,
        "#contact_form",
        this.emailParams.USER_ID
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            icon: "success",
            title: "Message Delivered Successfully",
            confirmButtonColor: "#f44336",
            text: "Thanks for reaching out, your message will be replied shortly.",
          });
        },
        function (error) {
          console.log("FAILED...", error);
          Swal.fire({
            icon: "error",
            title: "Oops, something went wrong",
            confirmButtonColor: "#f44336",
            text: "Please try again...",
          });
        }
      );
  };
  render() {
    const { contact, errors } = this.state;
    console.log(this.result);
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
            className="flex flex-col md:w-[25rem] gap-2 text-slate-600"
            data-aos="slide-down"
            onSubmit={this.handleSubmit}
            id="contact_form"
          >
            <h1 className="font-semibold text-[#f44336]">Get in touch</h1>

            <input
              className="h-8 p-4 rounded-lg border-[0.1rem] border-[#000c24]"
              type="text"
              placeholder="Name"
              value={contact.sender_name}
              name="sender_name"
              onChange={this.handleChange}
            />
            {errors && (
              <div className="text-red-500 ml-2 text-sm">
                {errors.sender_name}
              </div>
            )}

            <input
              type="email"
              placeholder="Email"
              className="h-8 p-4 rounded-lg border-[0.1rem] border-[#000c24]"
              value={contact.sender_email}
              name="sender_email"
              onChange={this.handleChange}
            />
            {errors && (
              <div className="text-red-500 ml-2 text-sm">
                {errors.sender_email}
              </div>
            )}
            <textarea
              className="h-[10rem] p-4 rounded-lg border-[0.1rem] border-[#000c24]"
              type="text"
              placeholder="Message"
              value={contact.message}
              name="message"
              onChange={this.handleChange}
            />
            {errors && (
              <div className="text-red-500 ml-2 text-sm">{errors.message}</div>
            )}
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
