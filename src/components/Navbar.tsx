import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/colleges", label: "Colleges" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary-glow/20 shadow-sm">
      <div className="content-max flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
        <img 
        src="/logo-header.png"
        alt="Inspire One Logo"
        style={{ height: "60px", width: "auto" }}
      />
          {/* <span className="font-heading text-xl font-bold text-primary-foreground tracking-tight">
            Inspire<span className="text-secondary">One</span>
          </span> */}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-secondary"
                  : "text-primary-foreground/80 hover:text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/inquiry" className="btn-orange !px-5 !py-2 text-sm">
            Start Your Inquiry
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-primary border-t border-primary-glow/20 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-primary-glow/10 transition-colors ${
                location.pathname === link.to
                  ? "text-secondary"
                  : "text-primary-foreground/80 hover:text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/inquiry"
            onClick={() => setMobileOpen(false)}
            className="btn-orange mt-3 block text-center !py-2 text-sm"
          >
            Start Your Inquiry
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
