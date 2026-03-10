import { getCourses } from "@/lib/data";
import CourseCard from "@/components/CourseCard";

const CoursesPage = () => {
  const courses = getCourses();

  return (
    <div className="section-padding">
      <div className="content-max">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Courses</h1>
        <p className="text-muted-foreground mb-10">
          Find the right program for your career goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.course_id} course={c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
