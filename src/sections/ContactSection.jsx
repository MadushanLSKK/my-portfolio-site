import SectionTitle from "../components/SectionTitle";
import { Mail, Smartphone ,Linkedin,Github ,Location } from "../components/Icons";
import emailjs from '@emailjs/browser';



const sendEmail = (e) => {
  e.preventDefault();
  
  emailjs.sendForm('service_l5erm8o', 'template_o7efres', e.target, 'P2c8PRVC1kaiFXGg0')
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.log(error.text);
        alert('Something went wrong, try again.');
    });
};


const ContactSection = ({ contact }) => (
    <section id="contact" className="mb-16 font-mono scroll-mt-20">
        <SectionTitle icon={<Mail />}>Contact Me</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-800 p-10 rounded-2xl shadow-2xl border border-teal-500/30">
            
            {/* Contact Details Column */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-teal-400 mb-4">Get In Touch</h3>
                <div className="flex items-center text-gray-300 hover:text-teal-300 transition duration-200">
                    <Mail />
                    <a href={`mailto:${contact.email}`} className="ml-3 text-lg">{contact.email}</a>
                </div>
                <div className="flex items-center text-gray-300 hover:text-teal-300 transition duration-200">
                    <Smartphone />
                    <a
                        href={`tel:${contact.phone}`}
                        className="ml-3 text-lg  "
                    >
                        {contact.phone}
                    </a>
                </div>

                <div className="flex items-center text-gray-300 hover:text-teal-300 transition duration-200">
                    <Linkedin />
                    <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="ml-3 text-lg font-medium">LinkedIn Profile</a>
                </div>
                <div className="flex items-center text-gray-300 hover:text-teal-300 transition duration-200">
                    <Github />
                    <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer" className="ml-3 text-lg font-medium">GitHub Profile</a>
                </div>
                 <div className="flex items-center text-gray-300 hover:text-teal-300 transition duration-200">
                    <Location />
                    <a 
                        href="https://www.google.com/maps?q=7.0638818,80.0940683" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ml-3 text-lg font-medium"
                        >
                        Location
                    </a>
                </div>
            </div>

            {/* Simple Contact Form Placeholder */}
            <div>
                <h3 className="text-2xl font-semibold text-teal-400 mb-4">Send a Quick Message</h3>
                <form className="space-y-4" onSubmit={sendEmail}>
                    <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/50 transition duration-150"
                    required
                    />
                    <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/50 transition duration-150"
                    required
                    />
                    <textarea
                    placeholder="Your Message"
                    name="message"
                    rows="4"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/50 transition duration-150"
                    required
                    ></textarea>
                    <button
                    type="submit"
                    className="w-full py-3 bg-linear-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-lg shadow-xl shadow-teal-700/30 hover:bg-teal-500 transition duration-300 transform hover:-translate-y-0.5"
                    >
                    Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
);
export default ContactSection