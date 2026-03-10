import { getColleges } from "@/lib/data";
import CollegeCard from "@/components/CollegeCard";

const CollegesPage = () => {
  const colleges = getColleges();

  return (
    <div className="section-padding">
      <div className="content-max">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Partner Colleges</h1>
        <p className="text-muted-foreground mb-10">
          Top institutions we work with across India.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {colleges.map((c) => (
            <CollegeCard key={c.college_id} college={c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegesPage;
