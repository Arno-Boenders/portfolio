import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function EmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    to_name: "Arno Boenders",
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID, // Replace with your EmailJS service ID
        process.env.REACT_APP_TEMPLATE_ID, // Replace with your EmailJS template ID
        formData,
        process.env.REACT_APP_USER_ID // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSent(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className=" flex items-center justify-center ">
      <div className="rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Send an Email</h2>
        {isLoading && (
          <div type="button" class="flex align-center justify-center gap-2" disabled>
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 1a11 11 0 1 0 11 11A11 11 0 0 0 12 1Zm0 19a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z"
                opacity=".25"
              />
              <path
                fill="currentColor"
                d="M12 4a8 8 0 0 1 7.89 6.7 1.53 1.53 0 0 0 1.49 1.3 1.5 1.5 0 0 0 1.48-1.75 11 11 0 0 0-21.72 0A1.5 1.5 0 0 0 2.62 12a1.53 1.53 0 0 0 1.49-1.3A8 8 0 0 1 12 4Z"
              >
                <animateTransform
                  attributeName="transform"
                  dur="0.75s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                />
              </path>
            </svg>
            Sending...
          </div>
        )}
        {isSent && (
          <p className="text-green-500 italic text-center mb-4">
            Your message has been sent!
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 ">
            <label className="block font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block  font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block  font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="w-full bg-orange-300 text-white font-medium py-2 rounded-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
