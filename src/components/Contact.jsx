import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/amdkolqb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl pt-[10vh] container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-5">Contact Me</h1>
      <p className="text-center text-lg text-gray-700 mb-8">
        I'd love to hear from you! Fill out the form below to get in touch.
      </p>

      <div className="flex justify-center items-center mt-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-black border-2 border-white p-8 rounded-2xl shadow-lg w-full sm:w-96"
        >
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Send Your Message
          </h2>
          <div className="flex flex-col mb-6">
            <label className="text-white mb-2">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="px-4 py-3 rounded-xl border-2 border-white focus:ring-2 focus:ring-blue-300 focus:outline-none text-black"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-red-500 mt-1">This field is required</span>}
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-white mb-2">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="px-4 py-3 rounded-xl border-2 border-white focus:ring-2 focus:ring-blue-300 focus:outline-none text-black"
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-red-500 mt-1">This field is required</span>}
          </div>
          <div className="flex flex-col mb-6">
            <label className="text-white mb-2">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="px-4 py-3 rounded-xl border-2 border-white focus:ring-2 focus:ring-blue-300 focus:outline-none text-black"
              id="message"
              name="message"
              placeholder="Enter your message"
            />
            {errors.message && <span className="text-red-500 mt-1">This field is required</span>}
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white rounded-xl px-6 py-3 w-full hover:bg-blue-800 transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
