import React from "react";
import { FaPercent, FaChalkboardTeacher } from "react-icons/fa";

const About = () => {
    return (
        <section
            className="p-4 md:p-8 flex flex-col md:flex-row items-center justify-between max-w-screen-2xl mx-auto"
            style={{
                backgroundImage: `url(https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/about-3-bg-1-2.png)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
                <img
                    src="https://themeholy.com/wordpress/edura/wp-content/uploads/2023/07/about_3_1-2.png"
                    alt="Graduation"
                    className="rounded-lg w-3/4 md:w-full"
                />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4 px-4 md:px-0">
                <h3 className="text-blue-500 font-bold uppercase text-sm">More about our company</h3>
                <h2 className="text-2xl md:text-4xl font-bold">Learn About Edura Education</h2>
                <p className="text-gray-600">
                    Synergistically visualize alternative content before cross-functional core.
                    Rapidly administer standardized value via focused benefits. Rapidly redefine highly
                    efficient niche markets with plug-and-play materials.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div>
                        <div className="bg-white shadow-lg p-6 rounded-lg flex items-start space-x-4 hover:shadow-xl transition duration-300">
                            <FaPercent className="text-blue-500 text-3xl" />
                            <div>
                                <h4 className="font-semibold text-lg">Competitive Rates</h4>
                            </div>
                        </div>
                        <div className="pt-3">
                            <p className="text-gray-500">
                                Join us on our journey as we continue to innovate & shape the future of education.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white shadow-lg p-6 rounded-lg flex items-start space-x-4 hover:shadow-xl transition duration-300">
                            <FaChalkboardTeacher className="text-blue-500 text-3xl" />
                            <div>
                                <h4 className="font-semibold text-lg">Expert Guidance</h4>
                            </div>
                        </div>
                        <div className="pt-3">
                            <p className="text-gray-500">
                                Our team is here to support your growth every step of the way.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:justify-start gap-4 mt-6">
                    <button
                        className="mt-6 relative h-12 w-40 sm:w-48 overflow-hidden border bg-red-600 border-red-500 text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-slate-600 before:duration-500 rounded-md hover:text-white hover:shadow-black hover:before:h-64 hover:before:-translate-y-32"
                    >
                        <span className="relative z-10 font-Roboto">Learn More →</span>
                    </button>
                    <button
                        className="mt-6 relative h-12 w-40 sm:w-48 overflow-hidden border bg-blue-500 border-blue-500 text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-slate-600 before:duration-500 rounded-md hover:text-white hover:shadow-black hover:before:h-64 hover:before:-translate-y-32"
                    >
                        <span className="relative z-10 font-Roboto">Contact Us →</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
