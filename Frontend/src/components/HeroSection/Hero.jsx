import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "../About/About";
import WhyUs from "../WhyUS/WhyUs";
import Services from "../Services/Services";
import "./Hero.css"; // Ensure this CSS file has the animation styles

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(true); // Start with animation on load

  const slides = [
    {
      title: "The World's Best Institute Of",
      subtitle: "Online Education",
      image:
        "https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/hero_bg_3_1-1.png",
      admissionText: "Admission Going On, Hurry To Enroll Now",
    },
    {
      title: "Innovative Learning Experience",
      subtitle: "Join Us Today",
      image:
        "https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/hero_bg_3_1-1.png",
      admissionText: "Limited Seats Available!",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setAnimate(false); // Temporarily disable animation before the change
      setTimeout(() => setAnimate(true), 50); // Re-enable animation after a short delay
      setCurrentSlide(next);
    },
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    // Trigger initial animation on page load
    setAnimate(true);
  }, []);

  return (
    <>
      <section className="relative text-center text-white min-h-[55vh] md:min-h-[75vh] lg:min-h-screen overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-h-[55vh] md:min-h-[75vh] lg:min-h-screen"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-cover opacity-80"
                style={{
                  backgroundImage:
                    "url('https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/hero_overlay_3_1.png')",
                }}
              ></div>

              {/* Centered Text Content */}
              <div className="relative z-10 flex items-center justify-center min-h-[55vh] md:min-h-[75vh] lg:min-h-screen">
                <div
                  className={`text-center p-4 md:p-10 lg:p-20 max-w-screen-md mx-auto ${
                    animate ? "animate-slide-fade" : ""
                  }`}
                >
                  <h1 className="text-lg sm:text-xl sm:font-bold lg:font-bold md:text-3xl lg:text-4xl">
                    {slide.title}
                  </h1>
                  <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mt-2 font-Roboto">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mt-4">
                    <p className="text-xs sm:text-sm md:text-lg lg:text-xl font-Roboto">
                      {slide.admissionText}
                    </p>
                    <div className="px-2 py-1 rounded-full inline-block">
                      <span className="bg-red-600 font-Roboto text-white p-2 rounded-full text-xs sm:text-sm md:text-base lg:text-sm font-semibold">
                        00 Days : 00 Mins : 00 Secs
                      </span>
                    </div>
                  </div>
                  <button className="mt-6 relative h-12 w-40 sm:w-48 overflow-hidden border bg-blue-500 border-blue-500 text-white shadow-2xl transition-all rounded-md hover:text-blue-500 hover:shadow-black">
                    <span className="relative z-10 font-Roboto">
                      ADMISSION NOW →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <About />
      <Services />
      <WhyUs />
    </>
  );
};

export default Hero;
