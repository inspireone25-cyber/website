import { getCourses } from "@/lib/data";
import CourseCard from "@/components/CourseCard";

const CoursesPage = () => {
  const courses = getCourses();

  return (
    <div className="section-padding section-teal-light bg-shape-orange">
      <div className="content-max relative z-10">
        <h1 className="section-heading font-heading text-4xl font-bold text-foreground mb-2">Courses</h1>
        <p className="text-muted-foreground mb-10">
          Find the right program for your career goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <CourseCard key={c.course_id} course={c} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
