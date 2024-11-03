import React, { useEffect } from "react";
import { FaUserGraduate, FaBook, FaCertificate, FaChalkboardTeacher, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: <FaUserGraduate className="text-3xl text-red-500 transition-transform transform hover:scale-110" />,
    title: "Exclusive Advisor",
    description: "Monotonically conceptualize cutting-edge convergence whereas B2C networks.",
    imageUrl: "https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/service-1-2.png",
    color: "text-red-500",
  },
  {
    icon: <FaBook className="text-3xl text-blue-500 transition-transform transform hover:scale-110" />,
    title: "Study Off Flexibly",
    description: "Discover different career paths and industries, along with the required skills, education.",
    imageUrl: "https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/service-1-1.png",
    color: "text-blue-500",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-blue-500 transition-transform transform hover:scale-110" />,
    title: "Evidence of learned",
    description: "Access a range of teaching strategies, lesson plans, classroom management.",
    imageUrl: "https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/service-1-1.png",
    color: "text-blue-500",
  },
];

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-4">
      <div className="text-center mb-8" data-aos="fade-up">
        <h2 className="text-sm font-semibold text-blue-600 uppercase">Our Services</h2>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">Our Creative Education Services</h1>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col transform hover:-translate-y-2"
            data-aos="zoom-in"
          >
            <div className="flex items-center mb-5">
              <div
                className={`flex items-center justify-center rounded-full w-24 h-24 bg-white shadow-md ${service.color} mr-4 transition-transform transform hover:scale-110`}
              >
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            <div className="relative">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-42 object-cover rounded-md transition-transform transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <FaArrowRight className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
