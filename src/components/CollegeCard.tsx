import type { College } from "@/lib/data";

const CollegeCard = ({ college }: { college: College }) => (
  <div className="card-lift bg-background rounded-lg p-6 border border-border">
    <h3 className="font-heading text-lg font-bold text-foreground mb-1">
      {college.college_name}
    </h3>
    <p className="text-sm text-muted-foreground mb-3">{college.location}</p>
    <div className="space-y-2 text-sm">
      <div>
        <span className="font-medium text-foreground">University: </span>
        <span className="text-muted-foreground">{college.university}</span>
      </div>
      <div>
        <span className="font-medium text-foreground">Courses: </span>
        <span className="text-muted-foreground">{college.courses_offered}</span>
      </div>
      <div>
        <span className="font-medium text-foreground">Placements: </span>
        <span className="text-muted-foreground">{college.placement_info}</span>
      </div>
    </div>
    <div className="mt-4 flex items-center justify-between text-xs">
      <span className="text-muted-foreground">{college.contact_number}</span>
      <a
        href={college.website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-medium hover:underline"
      >
        Visit Website →
      </a>
    </div>
  </div>
);

export default CollegeCard;
