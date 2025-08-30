// Footer.jsx
import React from "react";
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = {
    facebook: "https://www.facebook.com/achenasukh1",
    instagram: "https://www.instagram.com/achena_sukh/",
  };

  const devs = [
    { name: "Sourasish Purkait", url: "https://wa.me/919749024997?text=Hello%20I%20want%20to%20know%20more." },
    { name: "Sulogno Sarkar", url: "https://wa.me/918016980957?text=Hello%20I%20want%20to%20know%20more" },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] pt-12" role="contentinfo" aria-labelledby="footer-heading">
      {/* Pre-footer CTA */}
      <div className="container mx-auto px-4">
        <div className="mb-10 rounded-2xl border border-white/10 bg-[#161616] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h2 id="footer-heading" className="text-2xl md:text-3xl font-extrabold">Make unknown happiness possible</h2>
            <p className="text-gray-400">Every contribution fuels education, health, rights, and dignity.</p>
          </div>
          <Link
            to="/donation"
            className="inline-flex items-center justify-center rounded-full bg-[#b0db9c] px-6 py-3 text-black font-semibold hover:bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Donate now"
          >
            Donate Now
            <ExternalLink className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand + social */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-[#b0db9c]" aria-hidden="true" />
              <span className="text-2xl font-bold">Achena Sukh</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Unknown happiness is a deeper sense of fulfillment that comes from helping others, making a positive impact, and finding purpose together.
            </p>
            <div className="flex items-center gap-3">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                 className="bg-[#1d1d1d] p-3 rounded-full hover:bg-[#b0db9c] hover:text-black transition transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                 className="bg-[#1d1d1d] p-3 rounded-full hover:bg-[#b0db9c] hover:text-black transition transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h3 className="text-xl font-semibold mb-4 text-[#b0db9c]">Quick Links</h3>
            <ul className="space-y-3">
              {/* Note: use "/#about" not "/#/about" and not "/#about/" */}
              <li>
                <Link to="/#about" className="text-gray-400 hover:text-[#b0db9c] transition">About Us</Link>
              </li>
              <li>
                <Link to="/story" className="text-gray-400 hover:text-[#b0db9c] transition">Our Story</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-[#b0db9c] transition">Our Projects</Link>
              </li>
              <li>
                <Link to="/members" className="text-gray-400 hover:text-[#b0db9c] transition">Our Team</Link>
              </li>
            </ul>
          </nav>

          {/* Contact + Developers */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#b0db9c]">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#b0db9c]" aria-hidden="true" />
                <span>achenasukh@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#b0db9c]" aria-hidden="true" />
                <span>+91 7029992422</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b0db9c] mt-1" aria-hidden="true" />
                <address className="not-italic">
                  Achena Sukh,
                  <br />
                  Kakdwip, South 24 Parganas, West Bengal - 743347, India
                </address>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3 text-[#b0db9c]">Developers</h4>
              <ul className="space-y-2">
                {devs.map((dev) => (
                  <li key={dev.name}>
                    <a
                      href={dev.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#b0db9c] transition underline underline-offset-4"
                    >
                      {dev.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400">© {year} Achena Sukh.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-gray-400 hover:text-[#b0db9c] transition">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-[#b0db9c] transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
