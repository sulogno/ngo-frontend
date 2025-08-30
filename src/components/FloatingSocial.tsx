import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, X } from 'lucide-react';

const FloatingSocial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = {
    facebook: "https://www.facebook.com/achenasukh1",
    instagram: "https://www.instagram.com/achena_sukh/",
    youtube: "https://www.youtube.com/@achenasukh9006"
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Social Options */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 flex flex-col space-y-3 animate-fade-in-up">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1877f2] hover:bg-[#166fe5] p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:opacity-90 p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ff0000] hover:bg-[#cc0000] p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              <Youtube className="w-6 h-6 text-white" />
            </a>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#FF9B00] hover:bg-white rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_rgba(176,219,156,0.6)] flex items-center justify-center"
          style={{ width: '64px', height: '64px' }} // Ensures the button is a perfect circle and matches the logo size
        >
          {isOpen ? (
            <X className="w-28 h-28 text-black" /> // Adjusted icon size
          ) : (
            <img src="https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218997/Logo2_kuyzqh.png" alt="Achena Sukh Logo" className="w-16 h-16" /> // Adjusted logo size
          )}
        </button>
      </div>
    </div>
  );
};

export default FloatingSocial;