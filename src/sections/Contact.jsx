import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <footer
      id="contact"
      className="bg-violet-800 text-violet-200 py-12 px-6"
    >
      <div className="container mx-auto text-center space-y-6">
        {/* Titre */}
        <h2 className="text-xl font-bold mb-2">CONTACT</h2>
        <div className="w-15 h-1 bg-violet-200 mx-auto"></div>

        {/* Liens */}
        <div className="flex flex-col flex-row justify-center items-center gap-6 mt-8">
          {/* Email */}
          <a
            href="mailto:plouis.deneux@gmail.com"
            className="text-2xl hover:text-white transition-colors duration-300"
          >
            <MdEmail />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mon-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-white transition-colors duration-300"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/mon-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-white transition-colors duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
        
      </div>
    </footer>
  );
}

export default Contact;