import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCopy } from "react-icons/fi";

function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard!`);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/amdkolqb", userInfo);
      toast.success("Your message has been sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl pt-[10vh] container mx-auto px-4 md:px-20 my-16 text-slate-700 dark:text-gray-300"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Get In Touch</h1>
        <p className="text-slate-600 dark:text-gray-400 text-base md:text-lg max-w-xl mx-auto font-normal">
          Have an opportunity, collaboration idea, or question? Feel free to reach out directly or send a message.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
        {/* Contact Info Card */}
        <div className="w-full md:w-5/12 bg-white dark:bg-[#171717] border border-slate-200 dark:border-neutral-800 p-8 rounded-2xl space-y-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Info</h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
            Open to full-stack software development roles, internships, and technical collaborations.
          </p>

          <div className="space-y-4 pt-2">
            {/* Click to copy email */}
            <div 
              onClick={() => handleCopy("sauravku7091@gmail.com", "Email")}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 hover:border-emerald-500 cursor-pointer group transition-all"
              title="Click to copy email"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
                  <FiMail />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">Email (Click to copy)</p>
                  <p className="text-slate-900 dark:text-white font-semibold text-sm group-hover:text-emerald-500 transition-colors">
                    sauravku7091@gmail.com[cite: 1]
                  </p>
                </div>
              </div>
              <FiCopy className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </div>

            {/* Click to copy phone */}
            <div 
              onClick={() => handleCopy("+917091891322", "Phone number")}
              className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 hover:border-emerald-500 cursor-pointer group transition-all"
              title="Click to copy phone"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
                  <FiPhone />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">Phone (Click to copy)</p>
                  <p className="text-slate-900 dark:text-white font-semibold text-sm group-hover:text-emerald-500 transition-colors">
                    +91 7091891322[cite: 1]
                  </p>
                </div>
              </div>
              <FiCopy className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
            </div>

            <div className="flex items-center space-x-3 p-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
                <FiMapPin />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-gray-400 font-medium">Location</p>
                <p className="text-slate-900 dark:text-white font-semibold text-sm">Hazaribag / Greater Noida, India[cite: 1]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-7/12 bg-white dark:bg-[#171717] border border-slate-200 dark:border-neutral-800 p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-800 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f0f0f] border border-slate-300 dark:border-neutral-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
              {errors.name && <span className="text-rose-500 text-xs mt-1 block">{errors.name.message}</span>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-800 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f0f0f] border border-slate-300 dark:border-neutral-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
              {errors.email && <span className="text-rose-500 text-xs mt-1 block">{errors.email.message}</span>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-800 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows="4"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#0f0f0f] border border-slate-300 dark:border-neutral-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                id="message"
                placeholder="Write your message here..."
              />
              {errors.message && <span className="text-rose-500 text-xs mt-1 block">{errors.message.message}</span>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-3 rounded-xl transition duration-200 disabled:opacity-50 cursor-pointer shadow-sm"
            >
              <span>{loading ? "Sending..." : "Send Message"}</span>
              <FiSend className="text-base" />
            </button>
          </form>
        </div>
      </div>
      <hr className="mt-16 border-slate-200 dark:border-neutral-800" />
    </div>
  );
}

export default Contact;