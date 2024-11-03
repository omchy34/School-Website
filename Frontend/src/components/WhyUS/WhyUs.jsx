import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-6 md:p-16">
      <section className="max-w-7xl w-full flex flex-col md:flex-row-reverse items-center">
        {/* Image Section on the Right */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0" data-aos="fade-left">
          <img
            src="https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/wcu_2_1-2.png"
            alt="People studying"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Text Content and Cards Section on the Left */}
        <div className="w-full md:w-1/2 md:pr-10">
          <div className="text-center md:text-left mb-10" data-aos="fade-right">
            <h3 className="text-blue-500 text-sm font-semibold uppercase">Why Choose Us</h3>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Transform Your Life,<br /> Change the World
            </h1>
          </div>

          {/* Cards Section */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-2" data-aos="zoom-in">
              <div className="text-blue-500 mb-4">
                <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 2.57 1.37 4.81 3.5 6.11V18l3.25-1.83c.45.15.93.22 1.42.22s.97-.07 1.42-.22L15 18v-2.89C17.63 13.81 19 11.57 19 9c0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5 0 1.93-1.07 3.63-2.75 4.47L12 13l-2.25 1.47C8.07 12.63 7 10.93 7 9c0-2.76 2.24-5 5-5zm0 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Expert Instruction</h3>
              <p className="text-gray-600">We offer a wide range of educational products and services.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-2" data-aos="zoom-in">
              <div className="text-blue-500 mb-4">
                <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 4H3c-1.1 0-1.99.9-1.99 2L1 18c0 1.1.9 2 2 2h16l4-4V6c0-1.1-.9-2-2-2zm0 10l-2 2H4V6h16v8zm-4-5H5v2h12v-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Find Video Courses</h3>
              <p className="text-gray-600">Online education offers a wide range of courses & programs.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-2" data-aos="zoom-in">
              <div className="text-blue-500 mb-4">
                <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 2.57 1.37 4.81 3.5 6.11V18l3.25-1.83c.45.15.93.22 1.42.22s.97-.07 1.42-.22L15 18v-2.89C17.63 13.81 19 11.57 19 9c0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5 0 1.93-1.07 3.63-2.75 4.47L12 13l-2.25 1.47C8.07 12.63 7 10.93 7 9c0-2.76 2.24-5 5-5zm0 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Online Courses</h3>
              <p className="text-gray-600">Innovative market without extensive coordination.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-2" data-aos="zoom-in">
              <div className="text-blue-500 mb-4">
                <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 4H3c-1.1 0-1.99.9-1.99 2L1 18c0 1.1.9 2 2 2h16l4-4V6c0-1.1-.9-2-2-2zm0 10l-2 2H4V6h16v8zm-4-5H5v2h12v-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Learn Anywhere</h3>
              <p className="text-gray-600">Online education often allows learners to study from anywhere.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
