import { ChevronDown, Search, Menu } from "lucide-react";
import { useState } from "react";
import cbsEye from "@/assets/cbs-eye.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Latest", hasDropdown: true },
    { label: "Local News", hasDropdown: true },
    { label: "Live", hasDropdown: true },
    { label: "Shows", hasDropdown: true },
  ];

  return (
    <header className="cbs-header">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button key={item.label} className="cbs-nav-link">
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
            <button className="cbs-nav-link">
              •••
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="/" className="flex items-center gap-1.5 sm:gap-2 text-white">
              <img src={cbsEye} alt="CBS" className="h-5 sm:h-6 brightness-0 invert" />
              <span className="font-bold text-base sm:text-xl tracking-wide">CBS NEWS</span>
            </a>
          </div>

          {/* Right Nav */}
          <div className="flex items-center gap-4">
            <button className="text-white hover:opacity-80 transition-opacity">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/20">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="block py-2 text-white hover:opacity-80"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
