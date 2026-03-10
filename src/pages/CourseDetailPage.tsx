import { useParams, Link } from "react-router-dom";
import { getCourses } from "@/lib/data";

const CourseDetailPage = () => {
  const { id } = useParams();
  const courses = getCourses();
  const course = courses.find((c) => c.course_id === id);

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
    { label: "Duration", value: course.duration },
    { label: "Eligibility", value: course.eligibility },
    { label: "Fee Range", value: course.fee_range },
    { label: "Country", value: course.country },
    { label: "State", value: course.state },
    { label: "Intake", value: course.intake },
    { label: "Application Deadline", value: course.application_deadline },
  ];

  return (
    <div className="section-padding">
      <div className="content-max">
        <Link to="/courses" className="text-sm text-primary hover:underline mb-6 inline-block">
          ← Back to Courses
        </Link>

        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">{course.course_name}</h1>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">{course.description}</p>

        {/* Specializations */}
        <div className="mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Specializations</h2>
          <div className="flex flex-wrap gap-2">
            {specs.map((s) => (
              <span key={s} className="bg-muted text-foreground text-sm px-3 py-1.5 rounded-md">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {details.map((d) => (
            <div key={d.label} className="bg-muted rounded-lg p-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{d.label}</p>
              <p className="text-foreground font-medium text-sm">{d.value}</p>
            </div>
          ))}
        </div>

        {/* Colleges */}
        <div className="mb-10">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Colleges Offering This Course</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {collegeList.map((c) => (
              <div key={c} className="bg-muted rounded-lg px-4 py-3 text-sm text-foreground">
                {c}
              </div>
            ))}
          </div>
        </div>

        <Link
          to="/inquiry"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
        >
          Apply for {course.course_name}
        </Link>
      </div>
    </div>
  );
};

export default CourseDetailPage;
