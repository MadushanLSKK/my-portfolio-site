const SkillCard = ({ skill }) => {
    let cardClasses = "p-6 rounded-2xl transition duration-300 transform hover:scale-[1.03] flex flex-col items-start shadow-xl";
    let titleClasses = "text-2xl font-extrabold mb-1";
    let levelClasses = "text-sm font-medium italic";

    // Dynamic styling based on proficiency percentage
    if (skill.percentage >= 80) {
        // Advanced: Strongest emphasis - uses a distinct background and border
        cardClasses += " bg-gray-800 border-2 border-teal-500 shadow-teal-600/40 hover:bg-gray-700";
        titleClasses += " text-teal-300";
        levelClasses += " text-teal-400";
    } else if (skill.percentage >= 60) {
        // Intermediate: Moderate emphasis
        cardClasses += " bg-gray-800 border border-teal-700 shadow-teal-900/40 hover:bg-gray-700";
        titleClasses += " text-white";
        levelClasses += " text-gray-400";
    } else {
        // Beginner: Standard look
        cardClasses += " bg-gray-800 border border-gray-700 shadow-gray-900/40 hover:bg-gray-700";
        titleClasses += " text-gray-300";
        levelClasses += " text-gray-500";
    }

    return (
        <div className={cardClasses} title={`Level: ${skill.level}`}>
            <h3 className={titleClasses}>{skill.name}</h3>
            <p className={levelClasses}>{skill.level}</p>
        </div>
    );
};

export default SkillCard