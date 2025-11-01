const Header = ({ name }) => (
    <header className="py-6 shadow-2xl bg-gray-900/90 backdrop-blur-sm sticky top-0 z-10 border-b border-teal-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-extrabold text-teal-400"><a href="#hero"> {name.split(' ')[0]} Portfolio</a></h1>
            <nav className="flex items-center">
                <a href="#about" className="text-gray-300 hover:text-teal-400 transition ml-4">About</a>
                <a href="#skills" className="text-gray-300 hover:text-teal-400 transition ml-4">Skills</a>
                <a href="#certificates" className="text-gray-300 hover:text-teal-400 transition ml-4">Certificates</a> 
                <a href="#projects" className="text-gray-300 hover:text-teal-400 transition ml-4">Projects</a>
                <a href="#contact" className="text-gray-300 hover:text-teal-400 transition ml-4 hidden md:inline">Contact</a>
            </nav>
        </div>
    </header>
);

export default Header