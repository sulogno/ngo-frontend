import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const DONATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScmmGDN_28BP1x8R71x97zigdW94Q9FOyUq3R6n1uD4CfSUnA/viewform";

const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!mobileOpen) return;
    const close = () => setMobileOpen(false);
    window.addEventListener("popstate", close);
    return () => window.removeEventListener("popstate", close);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#151515]/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={closeMobile}
            aria-label="Go to homepage"
          >
            <img
              src="https://res.cloudinary.com/dtbgkad9m/image/upload/v1756218997/Logo2_kuyzqh.png"
              alt="Achena Sukh logo"
              className="w-14 h-14 rounded-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <span className="text-2xl md:text-3xl font-bold hover:text-[#b0db9c] transition-colors">
              Achena Sukh
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Primary">
            <Link to="/" className="hover:text-[#b0db9c] text-lg transition-colors">
              Home
            </Link>
            <a href="/#about" className="hover:text-[#b0db9c] text-lg transition-colors">
              About Us
            </a>
            <Link to="/story" className="hover:text-[#b0db9c] text-lg transition-colors">
              Story
            </Link>
            <Link to="/projects" className="hover:text-[#b0db9c] text-lg transition-colors">
              Projects
            </Link>

            {/* NEW: Core Members */}
            <Link to="/core-members" className="hover:text-[#b0db9c] text-lg transition-colors">
              Core Members
            </Link>

            <a
              href={DONATION_URL}
              className="bg-[#2e2e2e] hover:bg-[#b0db9c] hover:text-black px-7 py-2.5 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_20px_rgba(176,219,156,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Donate
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden rounded-lg p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b0db9c]"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 py-6 bg-[#1f1f1f]/95 backdrop-blur-md rounded-xl border border-white/10 relative z-50"
          >
            <nav className="flex flex-col gap-5 px-6" aria-label="Mobile">
              <Link
                to="/"
                className="text-lg hover:text-[#b0db9c] transition-colors"
                onClick={closeMobile}
              >
                Home
              </Link>
              <a
                href="/#about"
                className="text-lg hover:text-[#b0db9c] transition-colors"
                onClick={closeMobile}
              >
                About Us
              </a>
              <Link
                to="/story"
                className="text-lg hover:text-[#b0db9c] transition-colors"
                onClick={closeMobile}
              >
                Story
              </Link>
              <Link
                to="/projects"
                className="text-lg hover:text-[#b0db9c] transition-colors"
                onClick={closeMobile}
              >
                Projects
              </Link>

              {/* NEW: Core Members */}
              <Link
                to="/core-members"
                className="text-lg hover:text-[#b0db9c] transition-colors"
                onClick={closeMobile}
              >
                Core Members
              </Link>

              <a
                href={DONATION_URL}
                className="bg-[#2e2e2e] hover:bg-[#b0db9c] hover:text-black px-8 py-3 rounded-full text-center text-lg transition-all duration-300"
                onClick={closeMobile}
              >
                Donate
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
