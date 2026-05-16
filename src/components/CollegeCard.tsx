import type { College } from "@/lib/data";
import { MapPin, Phone, ExternalLink } from "lucide-react";

const CollegeCard = ({ college, index = 0 }: { college: College; index?: number }) => {
  const cardStyle = index % 2 === 0 ? "card-orange" : "card-teal";

  return (
    <div className={`${cardStyle} bg-background rounded-lg p-6 border border-border`}>
      <h3 className="font-heading text-lg font-bold text-foreground mb-1">
        {college.college_name}
      </h3>
      <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
        <MapPin size={14} className="text-primary flex-shrink-0" />
        {college.location}
      </p>
      <div className="space-y-2 text-sm">
        <div>
          <span className="font-medium text-primary">University: </span>
          <span className="text-muted-foreground">{college.university}</span>
        </div>
        <div>
          <span className="font-medium text-secondary">Courses: </span>
          <span className="text-muted-foreground">{college.courses_offered}</span>
        </div>
        <div>
          <span className="font-medium text-primary">Placements: </span>
          <span className="text-muted-foreground">{college.placement_info}</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="text-muted-foreground flex items-center gap-1">
          <Phone size={12} className="text-secondary" />
          {college.contact_number}
        </span>
        {/* <a
          href={college.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary font-semibold hover:underline flex items-center gap-1"
        >
          Visit Website <ExternalLink size={12} /> */}
        {/* </a> */}
      </div>
    </div>
  );
};

export default CollegeCard;
