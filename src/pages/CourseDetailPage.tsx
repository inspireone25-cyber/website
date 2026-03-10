import { useParams, Link } from "react-router-dom";
import { getCourses } from "@/lib/data";
import { Clock, GraduationCap, DollarSign, MapPin, Calendar, Users } from "lucide-react";

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = getCourses().find((c) => c.course_id === id);

  if (!course) {
    return (
      <div className="section-padding">
        <div className="content-max text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-primary hover:underline">← Back to Courses</Link>
        </div>
      </div>
    );
  }

  const specs = course.specialization.split(",").map((s) => s.trim());
  const collegeList = course.colleges.split(",").map((c) => c.trim());

  const details = [
    { icon: <Clock size={18} />, label: "Duration", value: course.duration, color: "text-primary" },
    { icon: <GraduationCap size={18} />, label: "Eligibility", value: course.eligibility, color: "text-secondary" },
    { icon: <DollarSign size={18} />, label: "Fee Range", value: course.fee_range, color: "text-primary" },
    { icon: <MapPin size={18} />, label: "Country / State", value: `${course.country} — ${course.state}`, color: "text-secondary" },
    { icon: <Calendar size={18} />, label: "Intake", value: course.intake, color: "text-primary" },
    { icon: <Users size={18} />, label: "Application Deadline", value: course.application_deadline, color: "text-secondary" },
  ];

  return (
    <div>
      {/* Hero banner */}
      <div className="hero-gradient-strong py-12 px-4">
        <div className="content-max">
          <Link to="/courses" className="text-sm text-primary-foreground/70 hover:text-primary-foreground mb-4 inline-block">
            ← Back to Courses
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-3">{course.course_name}</h1>
          <p className="text-primary-foreground/80 leading-relaxed max-w-3xl">{course.description}</p>
        </div>
      </div>

      <div className="section-padding">
        <div className="content-max">
          {/* Specializations */}
          <div className="mb-10">
            <h2 className="section-heading font-heading text-xl font-semibold text-foreground mb-6">Specializations</h2>
            <div className="flex flex-wrap gap-2">
              {specs.map((s, i) => (
                <span key={s} className={i % 2 === 0 ? "badge-teal" : "badge-orange"}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {details.map((d, i) => (
              <div key={d.label} className={`${i % 2 === 0 ? "card-teal" : "card-orange"} bg-background rounded-lg p-5 border border-border`}>
                <div className={`${d.color} mb-2`}>{d.icon}</div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{d.label}</p>
                <p className="text-foreground font-medium text-sm">{d.value}</p>
              </div>
            ))}
          </div>

          {/* Colleges */}
          <div className="mb-10">
            <h2 className="section-heading font-heading text-xl font-semibold text-foreground mb-6">Colleges Offering This Course</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {collegeList.map((c, i) => (
                <div key={c} className={`rounded-lg px-4 py-3 text-sm text-foreground font-medium ${i % 2 === 0 ? "bg-primary-light border-l-3 border-primary" : "bg-secondary-light border-l-3 border-secondary"}`}
                  style={{ borderLeftWidth: '3px' }}>
                  {c}
                </div>
              ))}
            </div>
          </div>

          <Link to="/inquiry" className="btn-orange">
            Apply for {course.course_name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
