import React from "react";
import ProfileImage from '../assets/profileImage.png'


const PROFILE_PIC_URL = ProfileImage ;

const Hero = ({ name, title, tagline }) => {
    const titleGlowStyle = {
        textShadow: '0 0 10px rgba(0,255,255,0.4), 0 0 20px rgba(0,255,255,0.2)'
    };

    return (
        <section id="hero" className="relative pt-24 pb-32 overflow-hidden bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-4">
                    <img 
                        src={PROFILE_PIC_URL}
                        alt="Alex Johnson Profile" 
                        className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-teal-300 shadow-xl object-cover animate-pulse-slow"
                    />
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-2" style={titleGlowStyle}>{name}</h1>
                <p className="text-xl md:text-3xl font-light text-teal-400 mb-6">{title}</p>
                <p className="max-w-2xl mx-auto text-gray-300 text-lg italic">
                    "{tagline}"
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10">
                    <a 
                        href="/cv.pdf"
                        download="cv.pdf"
                        className="inline-block px-8 py-3 bg-gray-700 text-white font-semibold rounded-full shadow-lg border border-teal-500 hover:bg-gray-600 transition duration-300 transform hover:scale-[1.03]"
                    >
                        Download CV 📄
                    </a>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-teal-500/50 shadow-xl transition duration-300 transform hover:scale-[1.03] hover:shadow-teal-400/70 relative overflow-hidden group"
                    >
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white opacity-10 group-hover:w-full group-hover:h-full top-0 left-0"></span>
                        <span className="relative">Connect for Internship &rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero