import React from "react";
import SectionTitle from "../components/SectionTitle";
import { Briefcase, GraduationCap } from "../components/Icons";

const AboutSection = ({ about }) => (
    <>
        <section id="about" className="mb-16">
            <SectionTitle icon={<Briefcase />}>About Me</SectionTitle>
            <div className="p-8 bg-gray-800 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-teal-500 transition duration-300">
                <p className="text-lg text-gray-300 leading-relaxed">{about}</p>
            </div>
        </section>

        <section id="education" className="mb-16">
            <SectionTitle icon={<GraduationCap />}>Education</SectionTitle>

            <div className="flex flex-col gap-5">
                
                <div className="p-6 bg-gray-800 rounded-2xl shadow-2xl border-l-4 border-teal-500 hover:shadow-teal-900/50 transition duration-300 md:flex md:items-start flex-column">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzMPvsqmNDlJ9wc5kaqZDB9KSArvE6ldguA&s" 
                    alt="University Logo" 
                    className="w-12 h-12 rounded-full object-cover mr-6 shrink-0 border-2 border-teal-300 shadow-lg" 
                    onError={(e) => e.target.style.display = 'none'}
                />
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">University of Colombo</h3>
                    <p className="text-lg text-teal-400 font-medium">BICT (Honours)</p>
                    <p className="text-sm text-gray-400 mb-3">2023 - Present (Expected Graduation: May 2027) | GPA: 3.44/4.0</p>
                    <p className="text-gray-300">Relevant Coursework: Data Structures & Algorithms, Database Management, Software Engineering Principles, Web Development.</p>
                </div>

                
                </div>

                <div className="p-6 bg-gray-800 rounded-2xl shadow-2xl border-l-4 border-teal-500 hover:shadow-teal-900/50 transition duration-300 md:flex md:items-start flex-column">
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQameJXkZT9PUYo4B5thp300QwDIxIKyxZ2Tkwm_ZM5grkhWIeiw5dVrNwFo-LVj_v8nE&usqp=CAU" 
                    alt="University Logo" 
                    className="w-12 h-12 rounded-full object-cover mr-6 shrink-0 border-2 border-teal-300 shadow-lg" 
                    onError={(e) => e.target.style.display = 'none'}
                />
                <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Bandaranayake College Gampaha</h3>
                    <p className="text-lg text-teal-400 font-medium">G.C.E Advanced Level , Technology Stream</p>
                    <p className="text-sm text-gray-400 mb-3">2019 - 2022 | Result: A A B | Z-Score: 1.9779</p>
                    <p className="text-gray-300">Completed Advanced Level education in Technology stream, developing foundational knowledge in engineering principles and technical subjects. Gained early exposure to technology concepts and problem-solving methodologies that supported transition to higher education in software engineering.</p>
                </div>

                
                </div>
            </div>
            

            
        </section>

        
    </>
);

export default AboutSection