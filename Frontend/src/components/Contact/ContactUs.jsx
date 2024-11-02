import React from 'react';

const Contact = () => {
  return (
    <div
      className="relative flex flex-col md:flex-row items-start justify-between bg-gray-50 p-8 md:p-16"
      style={{
        backgroundImage: "url('https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/contact_bg_1.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-90"></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-start justify-between w-full space-y-8 md:space-y-0 md:space-x-16">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-3xl font-bold text-gray-800">Have Any Questions?</h2>
          <p className="text-gray-600">
            Have an inquiry or some feedback for us? Fill out the form below to contact our team.
          </p>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-2xl">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Our Address</h3>
                <p className="text-gray-600">2690 Hiltona Street Victoria Road, New York, Canada</p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-2xl">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone Number</h3>
                <p className="text-gray-600">(+65) - 48596 - 5789<br />(+65) - 48596 - 5790</p>
              </div>
            </div>

            {/* Hours of Operation */}
            <div className="flex items-start space-x-4">
              <div className="text-blue-600 text-2xl">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Hours of Operation</h3>
                <p className="text-gray-600">
                  Monday - Friday: 09:00 - 20:00<br />
                  Sunday & Saturday: 10:30 - 22:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-blue-600">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name*</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name*"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address*"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="web-design" className="block text-sm font-medium text-gray-700">Web Design</label>
                <input
                  type="text"
                  id="web-design"
                  placeholder="Web Design"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number*"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Write Your Message*</label>
              <textarea
                id="message"
                placeholder="Write Your Message*"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg h-32"
              ></textarea>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200">
              SEND MESSAGE →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
