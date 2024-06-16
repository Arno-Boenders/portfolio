import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function EmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID, // Replace with your EmailJS service ID
        process.env.REACT_APP_TEMPLATE_ID, // Replace with your EmailJS template ID
        formData,
        process.env.REACT_APP_USER_ID // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
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
      <div className="rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Send an Email</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block  font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
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
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
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
              className="w-full px-3 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
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
