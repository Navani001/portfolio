/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
"use client";

import { useEffect, useState } from "react";
import SocialIcons from "./SocialIcons";
import { Toaster, toast } from "sonner";
import emailjs from "emailjs-com";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { Field, Label, Switch } from '@headlessui/react'

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    emailjs
      .send(
        "service_gc7ngcw",
        "template_16fuwql",
        {
          from_name: name,
          message: message,
          reply_to: email,
        },
        import.meta.env.VITE_EMAILJS_API_KEY,
       
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
        },
        () => {
          setError(true);
          setLoading(false);
        },
      );
  };

  useEffect(() => {
    if (sent) {
      toast.success("Message sent successfully.");
      console.log("sent");
      setName("");
      setEmail("");
      setMessage("");
    }
    setSent(false);
  }, [sent]);

  useEffect(() => {
    if (error) {
      toast.error("Error sending message.");
      console.log("error");
    }
    setError(false);
  }, [error]);

  return (
    <div id='contact' className="mx-auto flex flex-col px-3 lg:flex lg:max-w-6xl lg:flex-row">
      <Toaster position="top-center" richColors />
      <div className="mx-auto mb-5 flex min-h-[22rem] w-full max-w-[36rem] flex-col justify-between lg:mb-0">
        <div>
          <p className={`text-xl font-medium text-purple-400`}>Contact</p>
          <h2 className="text-5xl font-bold tracking-tight text-white">
            Let’s chat <br /> and discover{" "}
            <span className="to-accent bg-gradient-to-br from-purple-400 bg-clip-text font-bold text-transparent">
              exciting
            </span>{" "}
            opportunities.
          </h2>
        </div>
        <div className="space-y-5">
          <p className={`text-md flex font-medium text-gray-300`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-5 size-6 stroke-purple-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            navaneetha2006krishnan@gmail.com
          </p>
          <p className={`text-md flex font-medium text-gray-300`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              // stroke="currentColor"
              className="mr-5 size-6 stroke-purple-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            Erode
          </p>
        </div>
        <div className="space-x-5">
          <SocialIcons />
        </div>
      </div>
      <div className="mx-auto w-full max-w-[36rem] rounded-2xl bg-gradient-to-br from-[#763CAC50] from-0% via-[#6EBFF422] via-75% to-[#4690D401] to-100% p-10 px-6 backdrop-blur-md backdrop-filter">
        <form
          id="form"
          onSubmit={(event) => handleSubmit(event)}
          className="mt-4"
        >
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              {/* <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Name
              </label> */}
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
                className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="sm:col-span-2">
              {/* <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Email
              </label> */}
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email"
                className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="sm:col-span-2">
              {/* <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Message
              </label> */}
              <textarea
                id="message"
                rows={8}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Your message"
                className="block w-full rounded-md border-0 bg-transparent px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-indigo-400 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="to-accent mt-4 flex w-full items-center justify-center rounded-md bg-gradient-to-br from-purple-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {loading ? (
              <>
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="mr-2 h-5 w-5 animate-spin fill-white text-gray-400"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
                Sending
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
      {/* <div
        id="toast-simple"
        className="fixed top-0 z-50 flex w-full max-w-xs items-center space-x-4 divide-x divide-gray-200 rounded-lg bg-white p-4 text-gray-500 shadow rtl:space-x-reverse rtl:divide-x-reverse dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400"
        role="alert"
      >
        <svg
          className="h-5 w-5 rotate-45 text-blue-600 dark:text-blue-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
          />
        </svg>
        <div className="ps-4 text-sm font-normal">Message sent successfully.</div>
      </div> */}
    </div>
  );
}
