import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  isAdminLoggedIn, logoutAdmin,
  getCourses, setCourses, getColleges, setColleges, getLeads,
  type Course, type College
} from "@/lib/data";
import { toast } from "sonner";
import { LayoutDashboard, BookOpen, Building2, Users, LogOut, Plus, Pencil, Trash2, X } from "lucide-react";

type Tab = "dashboard" | "courses" | "colleges" | "leads";

const emptyCourse: Course = {
  course_id: "", course_name: "", specialization: "", description: "",
  duration: "", eligibility: "", fee_range: "", country: "India",
  state: "", intake: "", application_deadline: "", colleges: "",
};

const emptyCollege: College = {
  college_id: "", college_name: "", location: "", university: "",
  courses_offered: "", placement_info: "", website: "", contact_number: "",
};

const AdminPanel = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("dashboard");
  const [courses, setCoursesState] = useState<Course[]>([]);
  const [colleges, setCollegesState] = useState<College[]>([]);
  const [leads, setLeadsState] = useState(getLeads());

  // Modal state
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course>(emptyCourse);
  const [showCollegeModal, setShowCollegeModal] = useState(false);
  const [editingCollege, setEditingCollege] = useState<College>(emptyCollege);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isAdminLoggedIn()) { navigate("/admin-login"); return; }
    setCoursesState(getCourses());
    setCollegesState(getColleges());
    setLeadsState(getLeads());
  }, [navigate]);

  const handleLogout = () => { logoutAdmin(); navigate("/admin-login"); };

  // Course CRUD
  const saveCourse = () => {
    const updated = editingCourse.course_id
      ? courses.map((c) => (c.course_id === editingCourse.course_id ? editingCourse : c))
      : [...courses, { ...editingCourse, course_id: Date.now().toString() }];
    setCourses(updated);
    setCoursesState(updated);
    setShowCourseModal(false);
    toast.success(editingCourse.course_id ? "Course updated" : "Course added");
  };

  const deleteCourse = (id: string) => {
    const updated = courses.filter((c) => c.course_id !== id);
    setCourses(updated);
    setCoursesState(updated);
    toast.success("Course deleted");
  };

  // College CRUD
  const saveCollege = () => {
    const updated = editingCollege.college_id
      ? colleges.map((c) => (c.college_id === editingCollege.college_id ? editingCollege : c))
      : [...colleges, { ...editingCollege, college_id: Date.now().toString() }];
    setColleges(updated);
    setCollegesState(updated);
    setShowCollegeModal(false);
    toast.success(editingCollege.college_id ? "College updated" : "College added");
  };

  const deleteCollege = (id: string) => {
    const updated = colleges.filter((c) => c.college_id !== id);
    setColleges(updated);
    setCollegesState(updated);
    toast.success("College deleted");
  };

  const sidebarItems: { tab: Tab; label: string; icon: React.ReactNode }[] = [
    { tab: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { tab: "courses", label: "Courses", icon: <BookOpen size={18} /> },
    { tab: "colleges", label: "Colleges", icon: <Building2 size={18} /> },
    { tab: "leads", label: "Student Leads", icon: <Users size={18} /> },
  ];

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* Mobile sidebar toggle */}
      <button
        className="md:hidden fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <LayoutDashboard size={20} />
      </button>

      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 fixed md:static z-40 w-60 bg-muted border-r border-border min-h-full transition-transform`}>
        <div className="p-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => { setTab(item.tab); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                tab === item.tab ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent"
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors mt-4"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        {/* Dashboard */}
        {tab === "dashboard" && (
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground mb-8">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: "Total Courses", value: courses.length, color: "text-primary" },
                { label: "Total Colleges", value: colleges.length, color: "text-secondary" },
                { label: "Student Leads", value: leads.length, color: "text-foreground" },
              ].map((stat) => (
                <div key={stat.label} className="bg-muted rounded-lg p-6 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className={`font-heading text-4xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Courses */}
        {tab === "courses" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-heading text-3xl font-bold text-foreground">Courses</h1>
              <button
                onClick={() => { setEditingCourse(emptyCourse); setShowCourseModal(true); }}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90"
              >
                <Plus size={16} /> Add Course
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 font-medium text-muted-foreground">Name</th>
                    <th className="text-left py-3 px-2 font-medium text-muted-foreground hidden md:table-cell">Duration</th>
                    <th className="text-left py-3 px-2 font-medium text-muted-foreground hidden lg:table-cell">Fee Range</th>
                    <th className="text-right py-3 px-2 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((c) => (
                    <tr key={c.course_id} className="border-b border-border hover:bg-muted/50">
                      <td className="py-3 px-2 font-medium text-foreground">{c.course_name}</td>
                      <td className="py-3 px-2 text-muted-foreground hidden md:table-cell">{c.duration}</td>
                      <td className="py-3 px-2 text-muted-foreground hidden lg:table-cell">{c.fee_range}</td>
                      <td className="py-3 px-2 text-right">
                        <button onClick={() => { setEditingCourse(c); setShowCourseModal(true); }} className="text-primary hover:underline mr-3"><Pencil size={14} /></button>
                        <button onClick={() => deleteCourse(c.course_id)} className="text-destructive hover:underline"><Trash2 size={14} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Colleges */}
        {tab === "colleges" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="font-heading text-3xl font-bold text-foreground">Colleges</h1>
              <button
                onClick={() => { setEditingCollege(emptyCollege); setShowCollegeModal(true); }}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90"
              >
                <Plus size={16} /> Add College
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 font-medium text-muted-foreground">Name</th>
                    <th className="text-left py-3 px-2 font-medium text-muted-foreground hidden md:table-cell">Location</th>
                    <th className="text-left py-3 px-2 font-medium text-muted-foreground hidden lg:table-cell">University</th>
                    <th className="text-right py-3 px-2 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {colleges.map((c) => (
                    <tr key={c.college_id} className="border-b border-border hover:bg-muted/50">
                      <td className="py-3 px-2 font-medium text-foreground">{c.college_name}</td>
                      <td className="py-3 px-2 text-muted-foreground hidden md:table-cell">{c.location}</td>
                      <td className="py-3 px-2 text-muted-foreground hidden lg:table-cell">{c.university}</td>
                      <td className="py-3 px-2 text-right">
                        <button onClick={() => { setEditingCollege(c); setShowCollegeModal(true); }} className="text-primary hover:underline mr-3"><Pencil size={14} /></button>
                        <button onClick={() => deleteCollege(c.college_id)} className="text-destructive hover:underline"><Trash2 size={14} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Leads */}
        {tab === "leads" && (
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground mb-6">Student Leads</h1>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 font-medium text-muted-foreground">Name</th>
                    <th className="text-left py-3 px-2 font-medium text-muted-foreground hidden sm:table-cell">Phone</th>
                    <th className="text-left py-3 px-2 font-medium text-muted-foreground hidden md:table-cell">Email</th>
                    <th className="text-left py-3 px-2 font-medium text-muted-foreground">Course</th>
                    <th className="text-left py-3 px-2 font-medium text-muted-foreground hidden lg:table-cell">City</th>
                    <th className="text-left py-3 px-2 font-medium text-muted-foreground hidden lg:table-cell">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((l, i) => (
                    <tr key={i} className="border-b border-border hover:bg-muted/50">
                      <td className="py-3 px-2 text-foreground">{l.name}</td>
                      <td className="py-3 px-2 text-muted-foreground hidden sm:table-cell">{l.phone}</td>
                      <td className="py-3 px-2 text-muted-foreground hidden md:table-cell">{l.email}</td>
                      <td className="py-3 px-2 text-muted-foreground">{l.course}</td>
                      <td className="py-3 px-2 text-muted-foreground hidden lg:table-cell">{l.city}</td>
                      <td className="py-3 px-2 text-muted-foreground hidden lg:table-cell">{l.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Course Modal */}
      {showCourseModal && (
        <Modal title={editingCourse.course_id ? "Edit Course" : "Add Course"} onClose={() => setShowCourseModal(false)}>
          <FormFields
            fields={[
              { key: "course_name", label: "Course Name" },
              { key: "specialization", label: "Specializations (comma-separated)" },
              { key: "description", label: "Description", textarea: true },
              { key: "duration", label: "Duration" },
              { key: "eligibility", label: "Eligibility" },
              { key: "fee_range", label: "Fee Range" },
              { key: "country", label: "Country" },
              { key: "state", label: "State" },
              { key: "intake", label: "Intake" },
              { key: "application_deadline", label: "Application Deadline" },
              { key: "colleges", label: "Colleges (comma-separated)" },
            ]}
            data={editingCourse}
            onChange={(k, v) => setEditingCourse({ ...editingCourse, [k]: v })}
          />
          <button onClick={saveCourse} className="w-full mt-4 bg-primary text-primary-foreground py-2.5 rounded-md font-medium hover:opacity-90">
            Save Course
          </button>
        </Modal>
      )}

      {/* College Modal */}
      {showCollegeModal && (
        <Modal title={editingCollege.college_id ? "Edit College" : "Add College"} onClose={() => setShowCollegeModal(false)}>
          <FormFields
            fields={[
              { key: "college_name", label: "College Name" },
              { key: "location", label: "Location" },
              { key: "university", label: "University" },
              { key: "courses_offered", label: "Courses Offered" },
              { key: "placement_info", label: "Placement Info", textarea: true },
              { key: "website", label: "Website" },
              { key: "contact_number", label: "Contact Number" },
            ]}
            data={editingCollege}
            onChange={(k, v) => setEditingCollege({ ...editingCollege, [k]: v })}
          />
          <button onClick={saveCollege} className="w-full mt-4 bg-primary text-primary-foreground py-2.5 rounded-md font-medium hover:opacity-90">
            Save College
          </button>
        </Modal>
      )}
    </div>
  );
};

// Reusable Modal
const Modal = ({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) => (
  <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
    <div className="fixed inset-0 bg-foreground/20" onClick={onClose} />
    <div className="relative bg-background rounded-lg border border-border w-full max-w-lg max-h-[80vh] overflow-y-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading text-xl font-bold text-foreground">{title}</h2>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground"><X size={20} /></button>
      </div>
      {children}
    </div>
  </div>
);

// Reusable form fields
const FormFields = ({ fields, data, onChange }: {
  fields: { key: string; label: string; textarea?: boolean }[];
  data: Record<string, unknown>;
  onChange: (key: string, value: string) => void;
}) => (
  <div className="space-y-3">
    {fields.map((f) => (
      <div key={f.key}>
        <label className="block text-xs font-medium text-muted-foreground mb-1">{f.label}</label>
        {f.textarea ? (
          <textarea
            value={data[f.key] || ""}
            onChange={(e) => onChange(f.key, e.target.value)}
            rows={3}
            className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        ) : (
          <input
            type="text"
            value={data[f.key] || ""}
            onChange={(e) => onChange(f.key, e.target.value)}
            className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          />
        )}
      </div>
    ))}
  </div>
);

export default AdminPanel;
