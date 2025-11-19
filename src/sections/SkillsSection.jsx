import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { Zap } from "../components/Icons";

const SkillsSection = ({ skills }) => (
    <section id="skills" className="mb-16 font-mono scroll-mt-20">
        <SectionTitle icon={<Zap />}>Technical Skills</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
            ))}
        </div>
    </section>
);
export default SkillsSection