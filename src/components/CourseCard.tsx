import { Link } from "react-router-dom";
import type { Course } from "@/lib/data";

const CourseCard = ({ course }: { course: Course }) => {
  const specs = course.specialization.split(",").slice(0, 3);

  return (
    <Link
      to={`/courses/${course.course_id}`}
      className="card-lift block bg-background rounded-lg p-6 border border-border"
    >
      <h3 className="font-heading text-xl font-bold text-foreground mb-2">
        {course.course_name}
      </h3>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
        {course.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {specs.map((s) => (
          <span
            key={s}
            className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-sm"
          >
            {s.trim()}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{course.duration}</span>
        <span className="text-primary font-medium">View Details →</span>
      </div>
    </Link>
  );
};

export default CourseCard;
