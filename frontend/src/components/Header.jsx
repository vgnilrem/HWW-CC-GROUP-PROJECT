import { useState, useEffect } from "react";
import { TextSearch } from 'lucide-react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import SearchSidebar from "./SearchSidebar";
import { ContactModal } from "./modals/ContactModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 8;
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAboutUs = () => {
    if (location.pathname === "/") {
      const el = document.querySelector("#team");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector("#team");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      <header
        id="header"
        className={`min-w-md fixed top-0 left-0 right-0 z-50 transition-[width,margin,padding,transform,background-color,border-radius] duration-700 ease-in-out ${isScrolled
          ? "w-[92%] bg-[#D4A017]/70 text-gray-900 mt-6 px-10 py-6 shadow-[0px_4px_24px_6px_rgba(212,160,23,0.6)] rounded-2xl border-3 border-[#D4A017]/60 mx-auto backdrop-blur-md"
          : "w-full backdrop-blur-sm text-gray-900 py-8 px-20 bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to='/' className="cursor-pointer flex items-center">
            <img src="/HealthWealthnobackground.PNG" alt="HealthWealth" className="h-36 md:h-40 w-auto object-contain" />
          </NavLink>

          {/* Nav */}
          <nav className={`${isScrolled ? "text-gray-200 dark:text-gray-300" : "text-gray-700 dark:text-gray-200"}`}>
            <ul className="flex space-x-10 items-center transition-all duration-200">

              {/* About Us */}
              <li
                onClick={handleAboutUs}
                className={`font-semibold text-xl md:text-2xl cursor-pointer px-3 py-1 rounded-md border-2 border-transparent transition-all duration-300
                  ${isScrolled ? "text-[#325e43]" : "text-[#c7a655]"}
                  hover:border-[#c7a655]`}
              >
                About Us
              </li>

              {/* Donate */}
              <NavLink
                to='/donate'
                className={`font-semibold text-xl md:text-2xl cursor-pointer px-3 py-1 rounded-md border-2 border-transparent transition-all duration-300
                  ${isScrolled ? "text-[#325e43]" : "text-[#c7a655]"}
                  hover:border-[#c7a655]`}
              >
                <li>Donate</li>
              </NavLink>

              {/* Join Us */}
              <NavLink
                to='/join'
                className={`font-semibold text-xl md:text-2xl cursor-pointer px-3 py-1 rounded-md border-2 border-transparent transition-all duration-300
                  ${isScrolled ? "text-[#325e43]" : "text-[#c7a655]"}
                  hover:border-[#c7a655]`}
              >
                <li>Join Us</li>
              </NavLink>

              {/* Contact */}
              <li>
                <ContactModal isScrolled={isScrolled} />
              </li>

              {/* Search Icon */}
              <li>
                <TextSearch
                  onClick={() => setIsSidebarOpen(true)}
                  size={24}
                  className={`cursor-pointer hover:scale-[1.15] transition-all duration-300 hover:text-[#c7a655]
                    ${isScrolled ? "text-[#325e43]" : "text-[#c7a655]"}`}
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <SearchSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
