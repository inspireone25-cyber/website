import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="content-max px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-lg font-bold mb-4">
            Inspire<span className="text-secondary">One</span>
          </h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Guiding students to the best colleges for Engineering, Medical, and Management programs across India.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider text-secondary">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li><Link to="/courses" className="hover:text-secondary transition-colors">Courses</Link></li>
            <li><Link to="/colleges" className="hover:text-secondary transition-colors">Colleges</Link></li>
            <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider text-secondary">Contact</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>inspireone25@gmail.com</li>
            <li>+91 81433 61616</li>
            <li>Flat No. 104, United Elite Apartment, Kavuri Hills, Madhapur, Hyderabad, Telangana , India – 500033</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs opacity-50">
        © 2024 Inspire One Educational Services. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
