import { Award, BookOpen, Users, Lightbulb, Heart } from "lucide-react";

const services = [
  { icon: <BookOpen size={22} />, label: "Career counseling and aptitude assessment", color: "text-primary" },
  { icon: <Award size={22} />, label: "College and course selection guidance", color: "text-secondary" },
  { icon: <Users size={22} />, label: "Admission process support and documentation", color: "text-primary" },
  { icon: <Lightbulb size={22} />, label: "Scholarship and financial aid assistance", color: "text-secondary" },
  { icon: <Heart size={22} />, label: "Entrance exam preparation guidance", color: "text-primary" },
];

const AboutPage = () => (
  <div>
    {/* Hero */}
    <div className="hero-gradient-strong py-12 px-4">
      <div className="content-max max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-primary-foreground mb-3">About Us</h1>
        <p className="text-primary-foreground/80 leading-relaxed">
          Inspire One Educational Services is a trusted educational consultancy dedicated to helping students find the right academic path.
        </p>
      </div>
    </div>

    <div className="section-padding">
      <div className="content-max max-w-3xl space-y-8">
        <div className="card-teal bg-background rounded-lg p-6 border border-border">
          <h2 className="section-heading font-heading text-xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            To provide honest, personalized guidance that empowers students to make informed decisions about their education and career. We believe every student deserves access to quality counseling regardless of their background.
          </p>
        </div>

        <div className="card-orange bg-background rounded-lg p-6 border border-border">
          <h2 className="section-heading font-heading text-xl font-semibold mb-4">What We Do</h2>
          <ul className="space-y-3">
            {services.map((s, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className={s.color}>{s.icon}</span>
                {s.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="section-orange-light rounded-lg p-8">
          <h2 className="section-heading font-heading text-xl font-semibold mb-6">Why Students Trust Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            {[
              { value: "1500+", label: "Students Placed", color: "text-primary" },
              { value: "20+", label: "Partner Colleges", color: "text-secondary" },
              { value: "12+", label: "Years Experience", color: "text-primary" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className={`font-heading text-3xl font-bold ${s.color}`}>{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
