import { Link } from "react-router-dom";
import { getCourses, getColleges } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
import CollegeCard from "@/components/CollegeCard";

const testimonials = [
  { name: "Ananya R.", text: "Inspire One helped me find the perfect engineering college. Their guidance through the admission process was invaluable.", course: "B.Tech, VIT Vellore" },
  { name: "Vikram S.", text: "The counselors understood exactly what I needed. I got into my dream MBA program thanks to their step-by-step support.", course: "MBA, ISB Hyderabad" },
  { name: "Sneha M.", text: "From shortlisting colleges to completing applications, Inspire One made the entire process stress-free and efficient.", course: "MBBS, Manipal KMC" },
  { name: "Karthik D.", text: "I was confused about career options after 12th. Inspire One's counseling sessions gave me clarity and direction.", course: "B.Tech, SRM Chennai" },
];

const Index = () => {
  const courses = getCourses().slice(0, 4);
  const colleges = getColleges().slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="content-max text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Build Your Future With<br />
            <span className="text-primary">Inspire One</span> Educational Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We guide students to the best colleges for Engineering, Medical, and Management programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Explore Courses
            </Link>
            <Link
              to="/inquiry"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="section-padding section-alt">
        <div className="content-max">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Popular Courses</h2>
          <p className="text-muted-foreground mb-10">Explore programs across engineering, management, and medical fields.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((c) => <CourseCard key={c.course_id} course={c} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/courses" className="text-primary font-medium hover:underline">
              View All Courses →
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Colleges */}
      <section className="section-padding">
        <div className="content-max">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Top Partner Colleges</h2>
          <p className="text-muted-foreground mb-10">Institutions trusted by thousands of students across India.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colleges.map((c) => <CollegeCard key={c.college_id} college={c} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/colleges" className="text-primary font-medium hover:underline">
              View All Colleges →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding section-alt">
        <div className="content-max">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-10">Student Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-background rounded-lg p-6 border border-border">
                <p className="text-foreground mb-4 leading-relaxed italic">"{t.text}"</p>
                <div>
                  <p className="font-medium text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="section-padding">
        <div className="content-max text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Fill out a quick inquiry form and our counselors will guide you to the right program.
          </p>
          <Link
            to="/inquiry"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Start Your Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
