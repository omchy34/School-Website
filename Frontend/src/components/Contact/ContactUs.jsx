import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_myf46g3', // Service ID
      'template_2cjd7tp', // Template ID
      form.current,
      '1gDGcmjI2thHkcGeT' // User ID
    )
      .then((result) => {
        console.log(result.text);
        setIsSuccess(true);
        setStatusMessage("Message sent successfully!");
        form.current.reset(); // Clear form after successful submission
      }, (error) => {
        console.log(error.text);
        setIsSuccess(false);
        setStatusMessage("An error occurred, please try again.");
      });
  };

  return (
    <div
      className="relative flex flex-col md:flex-row items-start justify-between bg-gray-50 p-8 md:p-16"
      style={{
        backgroundImage: "url('https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/contact_bg_1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between w-full space-y-8 md:space-y-0 md:space-x-16">

        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-8 text-gray-800">
          <h2 className="text-3xl font-bold">Have Any Questions?</h2>
          <p className="text-gray-600">
            Have an inquiry or some feedback for us? Fill out the form below to contact our team.
          </p>
          {/* Address, Phone, and Hours Sections */}
        </div>

        {/* Right Section - Contact Form */}
     
<div
  className="w-full md:w-1/2 p-8 rounded-lg shadow-lg relative"
  style={{
    backgroundImage: "url('https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/contact_bg_1.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className=" bg-opacity-80 p-8 rounded-lg shadow-lg"> 
    <h2 className="text-xl font-bold text-blue-600">Get in Touch</h2>
    <p className="text-gray-600 mb-8">
      Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <form ref={form} onSubmit={sendEmail} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name*</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name*"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address*</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address*"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="web-design" className="block text-sm font-medium text-gray-700">Web Design</label>
          <input
            type="text"
            name="web_design"
            id="web-design"
            placeholder="Web Design"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number*</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number*"
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Write Your Message*</label>
        <textarea
          name="message"
          id="message"
          placeholder="Write Your Message*"
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
        SEND MESSAGE →
      </button>
    </form>

    {/* Status Message */}
    {statusMessage && (
      <p
        className={`mt-4 text-sm font-medium ${isSuccess ? 'text-green-600' : 'text-red-600'}`}
        aria-live="polite"
      >
        {statusMessage}
      </p>
    )}
  </div>
</div>

      </div>
    </div>
  );
};

export default Contact;
