import { CodeIcon, DemoIcon } from "./Icons";


const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 transition duration-500 transform hover:scale-[1.02] hover:shadow-teal-500/70 hover:bg-gray-700/90 flex flex-col justify-between">
    <div>
      <h3 className="text-xl font-semibold text-teal-300 mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map(tech => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium text-teal-100 bg-teal-600 rounded-full shadow-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
    
    {/* Dedicated buttons for GitHub and Live Demo */}
    <div className="flex justify-between mt-4 space-x-4">
        <a
          href={project.githubLink}
          className="flex-1 text-center text-gray-200 bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-600 transition duration-200 flex items-center justify-center shadow-md border border-gray-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CodeIcon /> GitHub Code
        </a>
        {project.liveLink && project.liveLink !== '#' && (
          <a
            href={project.liveLink}
            className="flex-1 text-center text-white bg-teal-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-500 transition duration-200 flex items-center justify-center shadow-md shadow-teal-700/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DemoIcon /> Live Demo
          </a>
        )}
    </div>
  </div>
);

export default ProjectCard