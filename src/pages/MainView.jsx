import React from 'react'
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import AboutSection from '../sections/AboutSection.jsx';
import SkillsSection from '../sections/SkillsSection.jsx';
import CertificatesSection from '../sections/CertificatesSection.jsx';
import ProjectsSection from '../sections/ProjectsSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';
import Footer from '../components/Footer.jsx';
import aws from '../assets/aws.png';
import network from '../assets/network.png';
import linux from '../assets/linux.png';
import python from '../assets/python.png'
import oracle from '../assets/oracle.png'
import react from '../assets/react.avif'
import inventory from '../assets/inventory.png'
import library from '../assets/library.png'
import mobileapp from '../assets/mobileapp.png'
import internship from '../assets/internship.png'
import clothshop from '../assets/clothshop.png'

import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiExpress, SiMysql, SiMongodb, SiGit, SiGithub,
  SiBootstrap, SiPython, SiC, SiAndroidstudio, 
  SiTailwindcss, SiFigma
} from 'react-icons/si';


const portfolioData = {
  name: "Kavindu Madushan",
  title: "Aspiring Full Stack Developer Intern",
  tagline: "Bridging theoretical knowledge with practical, scalable solutions.",
  about: "I am a dedicated BICT student at the University of Colombo with a strong foundation in modern web technologies and a passion for Full Stack Development, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I seek an internship to apply my skills in building scalable, user-friendly applications, collaborate with experienced engineers, and contribute to innovative projects. I thrive in fast-paced environments and am eager to continuously learn new technologies, architectural patterns, and best practices to grow as a professional Full Stack Developer.",
  skills: [
    { name: "HTML5", level: "Advanced", percentage: 90 , image: <SiHtml5/>, color: "#E34F26"  },
    { name: "CSS3", level: "Advanced", percentage: 90 , image: <SiCss3/>, color: "#1572B6"  },
    { name: "JavaScript", level: "Advanced", percentage: 90 , image: <SiJavascript/>, color: "#F7DF1E"  },
    { name: "React.js", level: "Advanced", percentage: 85 , image:<SiReact/>, color: '#61DAFB' },
    { name: "Node.js ", level: "Intermediate", percentage: 70, image:<SiNodedotjs/>, color: '#339933' },
    { name: "Express", level: "Intermediate", percentage: 70, image:<SiExpress/>, color: '#888888' },
    { name: "MongoDB", level: "Beginner", percentage: 50, image:<SiMongodb/>, color: '#4DB33D' },
    { name: "Tailwind CSS", level: "Advanced", percentage: 95 , image:<SiTailwindcss/>, color: '#38BDF8'},
    { name: "Python", level: "Intermediate", percentage: 65, image:<SiPython/>, color: '#3776AB' },
    { name: "Git", level: "Advanced", percentage: 90 , image:<SiGit/> ,color: '#F1502F' },
    { name: " GitHub", level: "Advanced", percentage: 90 , image:<SiGithub/>, color: '#ffffff'},
    { name: "Mysql", level: "Advanced", percentage: 90 , image: <SiMysql/>, color: "#4479A1"  },
  ],
  
  certificates: [ 
    { name: "AWS Educate Introduction to Cloud 101", issuer: " Amazon Web Services Training and Certification", date: "August 06, 2025", link: "https://www.credly.com/badges/fd1d4fe8-8181-4af7-9806-4179a2a07f0e/linked_in_profile", icon: aws },
    { name: "Networking Basics", issuer: "Cisco", date: "August 02, 2025", link: "https://www.credly.com/badges/66dcd5a6-2f95-4156-b4c9-8aa0380374d5/linked_in_profile", icon:network },
    { name: "LFS101: Introduction to Linux", issuer: "The Linux Foundation", date: "August 21, 2025", link: "https://www.credly.com/badges/2396d585-b1b5-47b7-b756-f82f01a3d825/linked_in_profile", icon:linux  },
    { name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", issuer: "Oracle", date: "July 28, 2027", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=382FF5CD7BD576140DC0AC8E636378555466E869B0AA7D2C95E1528157393AE0", icon: oracle },
    { name: " Programming in Python - 1. Python for Beginners", issuer: " Open Learning Platform - UoM", date: "Dec 2024", link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php", icon:python },
    { name: "ReactJS for Beginners ", issuer: "Simplilearn  ", date: "2025", link: "https://simpli-web.app.link/e/REb6ffskgYb", icon:react },
  ],
  projects: [
    { title: "Internship Finder (MERN Stack)", description: "Developed a MERN-based platform connecting students, companies, and admins for internship management, featuring secure role-based authentication, internship postings, and application tracking.", technologies: ["React", "Node(Express)", "MongoDB", "Zustand"], liveLink: "https://taskmanagerpro.netlify.app", githubLink: "https://github.com/alex-dev/task-manager-pro" ,icon:internship},
    { title: "Inventory Management System", description: "Developed a computer-based Inventory Management System for the university, replacing manual records. Features include item tracking, automated repair notifications, role-based access, and report generation for data-driven decisions. Achieved faster processing, improved accuracy, and enhanced user satisfaction.", technologies: ["React", "Tailwind CSS", "Express","MongoDB"], liveLink: "https://ecommerce-mockup-demo.vercel.app", githubLink: "https://github.com/MalithDN/Inventory-Management-System-For-University-Faculty",icon:inventory },
    { title: "Library Management System", description: "Built a dynamic web application for managing users, books, and categories with secure authentication and role-based access. Implemented CRUD operations, login, registration, and session management, delivering a smooth and reliable experience. Collaborated in a 6-member team using GitHub and Agile, creating a clean, responsive, and user-friendly interface.", technologies: ["HTML", "CSS", "PHP"], liveLink: "#", githubLink: "https://github.com/ManugaK/Web-App-Project",icon:library },
    { title: "FOT PULSE", description: "Built a mobile app with user authentication, profile management, and categorized news updates. Designed modern UIs in Figma based on Material Design for an engaging user experience.", technologies: ["Android Studio", "Java", "Figma","Firebase"], liveLink: "#", githubLink: "https://github.com/MadushanLSKK/FOTPULSE.git",icon:mobileapp },
    { title: "Online Clothing Shop (Ongoing)", description: "Built a mobile app with user authentication, profile management, and categorized news updates. Designed modern UIs in Figma based on Material Design for an engaging user experience.", technologies: ["React", "Node(Express)", "MongoDB"], liveLink: "#", githubLink: "https://github.com/MadushanLSKK/FOTPULSE.git",icon: clothshop},
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
