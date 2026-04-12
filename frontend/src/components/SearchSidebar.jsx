import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import SearchInput from "./SearchInput";
import { siteContent } from "../searchData";
import { ContactModal } from "./modals/ContactModal";

export default function SearchSidebar({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [contactOpen, setContactOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lower = query.toLowerCase();

    const matched = siteContent.filter((item) => {
      return (
        item.title.toLowerCase().includes(lower) ||
        item.description.toLowerCase().includes(lower) ||
        item.keywords.some((kw) => kw.toLowerCase().includes(lower))
      );
    });

    setResults(matched);
  }, [query]);

  const handleResultClick = (item) => {
    if (item.type === "modal" && item.modal === "contact") {
      onClose();
      setQuery('');
      setContactOpen(true);
      return;
    }

    onClose();
    setQuery('');

    if (item.hash) {
      if (window.location.pathname === item.path) {
        const el = document.querySelector(item.hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(item.path);
        setTimeout(() => {
          const el = document.querySelector(item.hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <>
      {/* Contact modal — only mounts when triggered from search */}
      {contactOpen && (
        <ContactModal
          isScrolled={false}
          forceOpen={contactOpen}
          onForceClose={() => setContactOpen(false)}
        />
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blurred overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-[6px] z-40"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-96 p-4 bg-[#05000c] border-l-2 border-gray-700/50 text-gray-400 shadow-2xl z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.5 }}
            >
              <X
                onClick={onClose}
                size={32}
                className="self-end mb-8 cursor-pointer hover:text-white hover:scale-[1.15] transition-all duration-400 ease-in-out active:scale-[0.85]"
              />

              <div className="flex-1 overflow-y-auto">
                <SearchInput value={query} onChange={setQuery} />

                {/* Results */}
                <div className="mt-4 space-y-3">
                  {query.trim() && results.length === 0 && (
                    <p className="text-gray-500 text-sm px-2">No results found for "{query}"</p>
                  )}

                  {results.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => handleResultClick(item)}
                      className="flex items-start justify-between gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-all duration-200 group"
                    >
                      <div>
                        <p className="text-white font-semibold text-sm group-hover:text-[#c7a655] transition-colors duration-200">
                          {item.title}
                        </p>
                        <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <ArrowRight
                        size={16}
                        className="mt-1 shrink-0 text-gray-600 group-hover:text-[#c7a655] transition-colors duration-200"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}