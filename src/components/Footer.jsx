const Footer = ({ name }) => (
    <footer className="bg-gray-900 border-t border-teal-800/50 py-6 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} {name}. Developed with React, Tailwind, and a keen eye for detail.</p>
    </footer>
);

export default Footer