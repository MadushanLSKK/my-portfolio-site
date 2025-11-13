const SkillCard = ({ skill }) => {
    return (
        <div className="p-6 rounded-2xl transition duration-300 transform hover:scale-[1.03] flex flex-col items-start shadow-xl bg-gray-800 border-2 border-teal-500 shadow-teal-600/40 hover:bg-gray-700" title={`Level: ${skill.level}`}>
            <div style={{ color: skill.color }} className="text-4xl mb-2">{skill.image}</div>
            <h3 className="text-2xl font-extrabold mb-1 text-teal-300">{skill.name}</h3>
            <p className="text-sm font-medium italic text-teal-400">{skill.level}</p>
        </div>
    );
};

export default SkillCard