import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { Briefcase } from "../components/Icons";

const ProjectsSection = ({ projects }) => (
    <section id="projects" className="mb-16 font-mono scroll-mt-20">
        <SectionTitle icon={<Briefcase />}>Featured Projects</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </section>
);
export default ProjectsSection