import { useState } from "react";
import { addLead, getCourses } from "@/lib/data";
import { toast } from "sonner";

const InquiryPage = () => {
  const courses = getCourses();
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", city: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      addLead({ ...form, date: new Date().toISOString().split("T")[0] });
      toast.success("Inquiry submitted successfully! We'll contact you soon.");
      setForm({ name: "", phone: "", email: "", course: "", city: "" });
      setSubmitting(false);
    }, 500);
  };

  return (
    <div>
      <div className="hero-gradient-strong py-10 px-4">
        <div className="content-max max-w-xl">
          <h1 className="font-heading text-3xl font-bold text-primary-foreground mb-2">Student Inquiry</h1>
          <p className="text-primary-foreground/80 text-sm">
            Fill in your details and our counselors will reach out to guide you.
          </p>
        </div>
      </div>

      <div className="section-padding section-teal-light">
        <div className="content-max max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-5 bg-background p-6 md:p-8 rounded-lg border border-border card-teal">
            {[
              { name: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
              { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91-XXXXXXXXXX" },
              { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
              { name: "city", label: "City", type: "text", placeholder: "Your city" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-foreground mb-1.5">{field.label}</label>
                <input
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  value={form[field.name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full border border-border rounded-md px-4 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Interested Course</label>
              <select
                required
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                className="w-full border border-border rounded-md px-4 py-2.5 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors"
              >
                <option value="">Select a course</option>
                {courses.map((c) => (
                  <option key={c.course_id} value={c.course_name}>{c.course_name}</option>
                ))}
              </select>
            </div>

            <button type="submit" disabled={submitting} className="w-full btn-orange !py-3 disabled:opacity-50">
              {submitting ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryPage;
