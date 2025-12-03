import { useState, useEffect } from "react";

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // on descend → cacher la navbar
        setShow(false);
      } else {
        // on remonte → montrer la navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 
      w-[98%] max-w-[1400px] bg-violet-800 bg-opacity-90 
      rounded-xl shadow-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 
      flex justify-between items-center 
      transition-transform duration-500 z-50
      ${show ? "translate-y-0" : "-translate-y-32"}`}
    >
      {/* Nom à gauche */}
      <div className="text-violet-200 font-bold text-sm sm:text-lg md:text-xl uppercase tracking-wider">
        PIERRE-LOUIS
      </div>

      {/* Liens à droite */}
      <ul className="flex space-x-3 sm:space-x-5 md:space-x-8">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-violet-200 text-xs sm:text-sm md:text-base font-medium hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
