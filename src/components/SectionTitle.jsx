const SectionTitle = ({ children, icon }) => (
  <h2 className="text-3xl font-bold pb-3 mb-8 text-white flex items-center relative group">
    {icon}
    {children}
    {/* Animated underline */}
    <span className="absolute bottom-0 left-0 w-12 h-1 bg-teal-500 rounded-full transition-all duration-500 group-hover:w-full"></span>
  </h2>
);

export default SectionTitle