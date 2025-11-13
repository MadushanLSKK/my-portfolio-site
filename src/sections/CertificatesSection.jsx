import SectionTitle from "../components/SectionTitle";
import { Scroll } from "../components/Icons";

const CertificatesSection = ({ certificates }) => (
    <section id="certificates" className="mb-16">
        <SectionTitle icon={<Scroll />}>Certificates & Formal Training</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
                <div 
                    key={index} 
                    className="p-6 bg-gray-800 rounded-xl shadow-2xl border border-teal-700/50 transition duration-300 hover:border-teal-400 hover:scale-[1.02] flex flex-col justify-between"
                >
                    <div>
                        <img src={cert.icon} className="w-25 h-25 mb-3 "/>
                        <h3 className="text-xl font-bold text-teal-300 mb-1">{cert.name}</h3>
                        <p className="text-sm text-gray-400 italic mb-3">Issued by: {cert.issuer}</p>
                        <p className="text-sm text-gray-300 mb-4">Completed: {cert.date}</p>
                    </div>
                    {cert.link && (
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 text-center text-sm font-medium text-teal-100 bg-teal-600 px-3 py-2 rounded-lg hover:bg-teal-500 transition duration-200 shadow-md"
                        >
                            View Credential
                        </a>
                    )}
                </div>
            ))}
        </div>
    </section>
);
export default CertificatesSection