import { Mail, Phone, Clock, MapPin } from "lucide-react";

const contacts = [
  { icon: <Mail size={22} />, title: "Email", info: "inspireone25@gmail.com", color: "text-primary", cardClass: "card-teal" },
  { icon: <Phone size={22} />, title: "Phone", info: "+91 81433 61616", color: "text-secondary", cardClass: "card-orange" },
  { icon: <Clock size={22} />, title: "Office Hours", info: "Mon – Sat, 9:00 AM – 6:00 PM IST", color: "text-primary", cardClass: "card-teal" },
  { icon: <MapPin size={22} />, title: "Location", info: "Flat No. 104, United Elite Apartment, Kavuri Hills, Madhapur, Hyderabad, Telangana , India – 500033", color: "text-secondary", cardClass: "card-orange" },
];

const ContactPage = () => (
  <div>
    <div className="hero-gradient-strong py-12 px-4">
      <div className="content-max max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-primary-foreground mb-3">Contact Us</h1>
        <p className="text-primary-foreground/80">
          Have questions? Reach out and our team will get back to you within 24 hours.
        </p>
      </div>
    </div>

    <div className="section-padding">
      <div className="content-max max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((c) => (
            <div key={c.title} className={`${c.cardClass} bg-background rounded-lg p-6 border border-border`}>
              <div className={`${c.color} mb-3`}>{c.icon}</div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{c.title}</h3>
              <p className="text-muted-foreground text-sm">{c.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
