import { Link } from "react-router-dom";
import { getCourses, getColleges } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
import CollegeCard from "@/components/CollegeCard";
import { GraduationCap, Building2, Users, Award } from "lucide-react";

const testimonials = [
  { name: "Ananya R.", text: "Inspire One helped me find the perfect engineering college. Their guidance through the admission process was invaluable.", course: "B.Tech, VIT Vellore" },
  { name: "Vikram S.", text: "The counselors understood exactly what I needed. I got into my dream MBA program thanks to their step-by-step support.", course: "MBA, ISB Hyderabad" },
  { name: "Sneha M.", text: "From shortlisting colleges to completing applications, Inspire One made the entire process stress-free and efficient.", course: "MBBS, Manipal KMC" },
  { name: "Karthik D.", text: "I was confused about career options after 12th. Inspire One's counseling sessions gave me clarity and direction.", course: "B.Tech, SRM Chennai" },
];

const stats = [
  { icon: <GraduationCap size={28} />, value: "1500+", label: "Students Placed", iconColor: "text-primary" },
  { icon: <Building2 size={28} />, value: "20+", label: "Partner Colleges", iconColor: "text-secondary" },
  { icon: <Users size={28} />, value: "12+", label: "Years Experience", iconColor: "text-primary" },
  { icon: <Award size={28} />, value: "95%", label: "Success Rate", iconColor: "text-secondary" },
];

const Index = () => {
  const courses = getCourses().slice(0, 4);
  const colleges = getColleges().slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient section-padding bg-shape-teal">
        <div className="content-max text-center relative z-10">
          <div className="inline-block badge-orange mb-4">Trusted by 1500+ Students</div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Build Your Future With<br />
            <span className="hero-gradient-strong bg-clip-text text-transparent">Inspire One</span> Educational Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We guide students to the best colleges for Engineering, Medical, and Management programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="btn-orange">
              Explore Courses
            </Link>
            <Link to="/inquiry" className="btn-teal">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 border-b border-border">
        <div className="content-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className={`${s.iconColor} mb-2 flex justify-center`}>{s.icon}</div>
                <p className="font-heading text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="section-padding section-teal-light bg-shape-orange">
        <div className="content-max relative z-10">
          <h2 className="section-heading font-heading text-3xl font-bold text-foreground mb-2">Popular Courses</h2>
          <p className="text-muted-foreground mb-10">Explore programs across engineering, management, and medical fields.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c, i) => <CourseCard key={c.course_id} course={c} index={i} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/courses" className="text-secondary font-semibold hover:underline">
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Colleges */}
      <section className="section-padding bg-shape-teal">
        <div className="content-max relative z-10">
          <h2 className="section-heading font-heading text-3xl font-bold text-foreground mb-2">Top Partner Colleges</h2>
          <p className="text-muted-foreground mb-10">Institutions trusted by thousands of students across India.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colleges.map((c, i) => <CollegeCard key={c.college_id} college={c} index={i} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/colleges" className="text-primary font-semibold hover:underline">
              View All Colleges →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding section-orange-light">
        <div className="content-max">
          <h2 className="section-heading font-heading text-3xl font-bold text-foreground mb-10">Student Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className={`${i % 2 === 0 ? "card-teal" : "card-orange"} bg-background rounded-lg p-6 border border-border`}>
                <p className="text-foreground mb-4 leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-medium text-foreground text-sm">{t.name}</p>
                  <p className={`text-xs ${i % 2 === 0 ? "text-primary" : "text-secondary"}`}>{t.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="section-padding hero-gradient-strong text-center">
        <div className="content-max">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Ready to Start Your Journey?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Fill out a quick inquiry form and our counselors will guide you to the right program.
          </p>
          <Link to="/inquiry" className="btn-orange">
            Start Your Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
