import React from "react";

const Contact = () => {
  return (
    <>
      <div className="text-center mt-8">
        <h1 className="text-5xl font-bold text-pink-500">Contact Us</h1>
        <p className="text-xl text-gray-600 mt-4">
          Contact us for product inquiries, support, or feedback.💖
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 m-20 shadow-2xl p-10 rounded-xl mt-8">
        <div className="md:w-1/2 text-gray-700">
          <h2 className="text-3xl font-semibold text-pink-500">Get in Touch</h2>

          <p className="mt-4 text-lg">
            Have questions about our products or need beauty advice? Reach out
            to us anytime.
          </p>

          <div className="mt-6 space-y-4 text-lg">
            <p>
              <b>Email: </b>captainraju12345@gmail.com
            </p>
            <p>
              <b>Phone: </b>+91 9789474527
            </p>
            <p>
              <b>Address: </b>Ayodhya Bypass, Bhopal, Madhya Pradesh, 462041
            </p>
            <p>
              <b>Working Hours: </b>Mon - Sat | 10:00 AM - 6:00 PM
            </p>
          </div>
        </div>

        <div className="md:w-1/2">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-pink-500"
            />

            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-pink-500"
            />

            <textarea
              rows="5"
              placeholder="Enter Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-pink-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
