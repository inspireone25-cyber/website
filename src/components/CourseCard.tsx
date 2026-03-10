import { Link } from "react-router-dom";
import type { Course } from "@/lib/data";

const courseBadgeMap: Record<string, string> = {
  "B.Tech": "badge-teal",
  "MBA": "badge-orange",
  "PGDM": "badge-teal",
  "BPC (Medical)": "badge-orange",
};

const CourseCard = ({ course, index = 0 }: { course: Course; index?: number }) => {
  const specs = course.specialization.split(",").slice(0, 3);
  const cardStyle = index % 2 === 0 ? "card-teal" : "card-orange";
  const badgeStyle = courseBadgeMap[course.course_name] || (index % 2 === 0 ? "badge-teal" : "badge-orange");

  return (
    <Link
      to={`/courses/${course.course_id}`}
      className={`${cardStyle} block bg-background rounded-lg p-6 border border-border`}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-heading text-xl font-bold text-foreground">
          {course.course_name}
        </h3>
        <span className={badgeStyle}>{course.duration}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
        {course.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {specs.map((s, i) => (
          <span
            key={s}
            className={i % 2 === 0 ? "badge-teal" : "badge-orange"}
          >
            {s.trim()}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{course.fee_range}</span>
        <span className="text-secondary font-semibold">View Details →</span>
      </div>
    </Link>
  );
};

export default CourseCard;
