import React from "react";
import ProfileImage from '../assets/profileImage.png'


const PROFILE_PIC_URL = ProfileImage ;
const NAME_GRADIENT_CLASS = "bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"; 

const Hero = ({ name, title, tagline }) => {
    const titleGlowStyle = {
        textShadow: '0 0 10px rgba(0,255,255,0.4), 0 0 20px rgba(0,255,255,0.2)'
    };

    return (
        <section id="hero" className="relative pt-20 pb-32 overflow-hidden bg-gray-900 font-mono">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-4">
                    <img 
                        src={PROFILE_PIC_URL}
                        alt="Alex Johnson Profile" 
                        className="w-60 h-60 rounded-full mx-auto mb-4 border-4 border-teal-300 shadow-xl object-cover animate-pulse-slow"
                    />
                </div>
                <h1 className={`text-5xl md:text-7xl font-extrabold leading-none mb-2 ${NAME_GRADIENT_CLASS} animate-fadeInUp delay-200`}>
                            {name}
                        </h1>
                <p className="text-xl md:text-3xl font-light text-teal-400 mb-6">{title}</p>
                <p className="max-w-2xl mx-auto text-gray-300 text-lg italic">
                    "{tagline}"
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10">
                    <a 
                        href="/CV.pdf"
                        download="cv.pdf"
                        className="inline-block px-8 py-3 
                                bg-linear-to-r from-teal-400 to-blue-500 text-white 
                                font-semibold rounded-full shadow-teal-500/50 shadow-md 
                                transition duration-300 transform hover:scale-[1.03] hover:shadow-teal-400/70 
                                relative overflow-hidden group"
                    >
                        Download CV 📄
                    </a>
                   <a
                        href="#contact"
                        // CHANGE: Replace solid color with a gradient from teal to a brighter cyan/blue.
                        className="inline-block px-8 py-3 
                                bg-linear-to-r from-teal-400 to-blue-500 text-white 
                                font-semibold rounded-full shadow-teal-500/50 shadow-md 
                                transition duration-300 transform hover:scale-[1.03] hover:shadow-teal-400/70 
                                relative overflow-hidden group"
                    >
                        {/* This span creates the smooth, white "water-wipe" on hover */}
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white opacity-10 group-hover:w-full group-hover:h-full top-0 left-0"></span>
                        <span className="relative">Connect for Internship &rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero