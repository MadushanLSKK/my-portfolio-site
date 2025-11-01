import React from 'react'
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import AboutSection from '../sections/AboutSection.jsx';
import SkillsSection from '../sections/SkillsSection.jsx';
import CertificatesSection from '../sections/CertificatesSection.jsx';
import ProjectsSection from '../sections/ProjectsSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import Footer from '../components/Footer.jsx';


const portfolioData = {
  name: "Kavindu Madushan",
  title: "Aspiring Full Stack Developer Intern",
  tagline: "Bridging theoretical knowledge with practical, scalable solutions.",
  about: "I am a dedicated BICT student at the University of Colombo with a strong foundation in modern web technologies and a passion for Full Stack Development, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I seek an internship to apply my skills in building scalable, user-friendly applications, collaborate with experienced engineers, and contribute to innovative projects. I thrive in fast-paced environments and am eager to continuously learn new technologies, architectural patterns, and best practices to grow as a professional Full Stack Developer.",
  skills: [
    { name: "JavaScript", level: "Advanced", percentage: 90 },
    { name: "React.js", level: "Advanced", percentage: 85 },
    { name: "Node.js (Express)", level: "Intermediate", percentage: 70 },
    { name: "Tailwind CSS", level: "Advanced", percentage: 95 },
    { name: "Python", level: "Intermediate", percentage: 65 },
    { name: "MongoDB", level: "Beginner", percentage: 50 },
    { name: "Git & GitHub", level: "Advanced", percentage: 90 },
  ],
  
  certificates: [ 
    { name: "AWS Educate Introduction to Cloud 101", issuer: " Amazon Web Services Training and Certification", date: "August 06, 2025", link: "https://www.credly.com/badges/fd1d4fe8-8181-4af7-9806-4179a2a07f0e/linked_in_profile", icon: "☁️" },
    { name: "React - The Complete Guide", issuer: "Academind", date: "April 2024", link: "https://mock-certificate-link-2.com", icon: "⚛️" },
    { name: "Advanced SQL and Database Design", issuer: "Coursera / IBM", date: "Jan 2024", link: "https://mock-certificate-link-3.com", icon: "🗄️" }
  ],
  projects: [
    { title: "Task Manager Pro (MERN Stack)", description: "A full-stack application allowing users to create, organize, and track personal and team tasks. Features real-time updates and user authentication.", technologies: ["React", "Express", "MongoDB", "Redux"], liveLink: "https://taskmanagerpro.netlify.app", githubLink: "https://github.com/alex-dev/task-manager-pro" },
    { title: "Inventory Management System", description: "Developed a computer-based Inventory Management System for the university, replacing manual records. Features include item tracking, automated repair notifications, role-based access, and report generation for data-driven decisions. Achieved faster processing, improved accuracy, and enhanced user satisfaction.", technologies: ["React", "Tailwind CSS", "Express","MongoDB"], liveLink: "https://ecommerce-mockup-demo.vercel.app", githubLink: "https://github.com/MalithDN/Inventory-Management-System-For-University-Faculty" },
    { title: "Library Management System", description: "Built a dynamic web application for managing users, books, and categories with secure authentication and role-based access. Implemented CRUD operations, login, registration, and session management, delivering a smooth and reliable experience. Collaborated in a 6-member team using GitHub and Agile, creating a clean, responsive, and user-friendly interface.", technologies: ["HTML", "CSS", "PHP"], liveLink: "#", githubLink: "https://github.com/ManugaK/Web-App-Project" },
  ],
  contact: {
    email: "kmadushan396@gmail.com",
    phone: "+94 767 368 709",
    linkedin: "www.linkedin.com/in/kavindu-madushan-56ab85297",
    github: "github.com/MadushanLSKK",
  }
};


export const MainView = () => {
    const { name, title, tagline, about, skills, education, certificates, projects, contact } = portfolioData;
  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans scroll-pt-32">
      
      <Header name={name} />

      <Hero name={name} title={title} tagline={tagline} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <AboutSection about={about} education={education} />

        <SkillsSection skills={skills} />
        
        <CertificatesSection certificates={certificates} />

        <ProjectsSection projects={projects} />

        <ContactSection contact={contact} />

      </main>

      <Footer name={name} />
    </div>
  
  )
}
