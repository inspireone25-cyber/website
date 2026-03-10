// Mock data store for the application
// In production, this would connect to Google Sheets API

export interface Course {
  course_id: string;
  course_name: string;
  specialization: string;
  description: string;
  duration: string;
  eligibility: string;
  fee_range: string;
  country: string;
  state: string;
  intake: string;
  application_deadline: string;
  colleges: string;
}

export interface College {
  college_id: string;
  college_name: string;
  location: string;
  university: string;
  courses_offered: string;
  placement_info: string;
  website: string;
  contact_number: string;
}

export interface StudentLead {
  name: string;
  phone: string;
  email: string;
  course: string;
  city: string;
  date: string;
}

export interface AdminUser {
  email: string;
  password: string;
  role: string;
}

// Initial mock data
const initialCourses: Course[] = [
  {
    course_id: "1",
    course_name: "B.Tech",
    specialization: "Computer Science, Artificial Intelligence, Mechanical Engineering, Civil Engineering, Electronics Engineering",
    description: "Bachelor of Technology is a 4-year undergraduate engineering program that provides students with in-depth knowledge and practical skills in various engineering disciplines.",
    duration: "4 Years",
    eligibility: "10+2 with Physics, Chemistry, Mathematics (minimum 60%)",
    fee_range: "₹2,00,000 - ₹15,00,000 per year",
    country: "India",
    state: "Multiple States",
    intake: "July / August",
    application_deadline: "June 30, 2026",
    colleges: "IIT Delhi, NIT Trichy, VIT Vellore, SRM Chennai"
  },
  {
    course_id: "2",
    course_name: "MBA",
    specialization: "Finance, Marketing, Human Resources, Business Analytics",
    description: "Master of Business Administration is a 2-year postgraduate program designed to develop leadership, management, and entrepreneurial skills for the modern business world.",
    duration: "2 Years",
    eligibility: "Bachelor's degree with minimum 50% + CAT/MAT/GMAT score",
    fee_range: "₹5,00,000 - ₹25,00,000 per year",
    country: "India",
    state: "Multiple States",
    intake: "June / July",
    application_deadline: "March 31, 2026",
    colleges: "IIM Ahmedabad, ISB Hyderabad, XLRI Jamshedpur, SP Jain Mumbai"
  },
  {
    course_id: "3",
    course_name: "PGDM",
    specialization: "Finance, Marketing, Human Resources, Business Analytics",
    description: "Post Graduate Diploma in Management is an industry-oriented 2-year program recognized by AICTE, focused on practical management skills and corporate readiness.",
    duration: "2 Years",
    eligibility: "Bachelor's degree with minimum 50% + entrance exam score",
    fee_range: "₹4,00,000 - ₹20,00,000 per year",
    country: "India",
    state: "Multiple States",
    intake: "June / July",
    application_deadline: "April 15, 2026",
    colleges: "MDI Gurgaon, IMT Ghaziabad, FORE School Delhi, Great Lakes Chennai"
  },
  {
    course_id: "4",
    course_name: "BPC (Medical)",
    specialization: "MBBS, BDS, B.Pharm, Nursing",
    description: "Medical and pharmaceutical undergraduate programs that prepare students for careers in healthcare, dentistry, pharmacy, and nursing with clinical training.",
    duration: "4-5.5 Years",
    eligibility: "10+2 with Physics, Chemistry, Biology (minimum 50%) + NEET",
    fee_range: "₹3,00,000 - ₹20,00,000 per year",
    country: "India",
    state: "Multiple States",
    intake: "August / September",
    application_deadline: "July 31, 2026",
    colleges: "AIIMS Delhi, CMC Vellore, JIPMER Puducherry, Manipal KMC"
  }
];

const initialColleges: College[] = [
  {
    college_id: "1",
    college_name: "VIT Vellore",
    location: "Vellore, Tamil Nadu",
    university: "Vellore Institute of Technology",
    courses_offered: "B.Tech, M.Tech, MBA",
    placement_info: "95% placement rate. Top recruiters: Microsoft, Amazon, TCS, Infosys. Average package: ₹8.5 LPA",
    website: "https://vit.ac.in",
    contact_number: "+91-416-2243091"
  },
  {
    college_id: "2",
    college_name: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu",
    university: "SRM University",
    courses_offered: "B.Tech, MBA, MBBS, BDS",
    placement_info: "90% placement rate. Top recruiters: Google, Wipro, HCL. Average package: ₹7 LPA",
    website: "https://srmist.edu.in",
    contact_number: "+91-44-27417000"
  },
  {
    college_id: "3",
    college_name: "Manipal Academy of Higher Education",
    location: "Manipal, Karnataka",
    university: "Manipal University",
    courses_offered: "B.Tech, MBBS, MBA, B.Pharm",
    placement_info: "92% placement rate. Top recruiters: Deloitte, Goldman Sachs, Bosch. Average package: ₹9 LPA",
    website: "https://manipal.edu",
    contact_number: "+91-820-2571201"
  },
  {
    college_id: "4",
    college_name: "Christ University",
    location: "Bangalore, Karnataka",
    university: "Christ (Deemed to be University)",
    courses_offered: "MBA, PGDM, B.Tech",
    placement_info: "88% placement rate. Top recruiters: EY, KPMG, Accenture. Average package: ₹6.5 LPA",
    website: "https://christuniversity.in",
    contact_number: "+91-80-40129100"
  }
];

const initialLeads: StudentLead[] = [
  { name: "Rahul Sharma", phone: "9876543210", email: "rahul@email.com", course: "B.Tech", city: "Delhi", date: "2026-03-01" },
  { name: "Priya Patel", phone: "9876543211", email: "priya@email.com", course: "MBA", city: "Mumbai", date: "2026-03-05" },
  { name: "Amit Kumar", phone: "9876543212", email: "amit@email.com", course: "MBBS", city: "Bangalore", date: "2026-03-08" },
];

const adminUsers: AdminUser[] = [
  { email: "admin@inspireone.com", password: "admin123", role: "admin" }
];

// Data access functions (simulating Google Sheets API)
const STORAGE_KEYS = {
  courses: "inspireone_courses",
  colleges: "inspireone_colleges",
  leads: "inspireone_leads",
};

function getStoredData<T>(key: string, initial: T[]): T[] {
  const stored = localStorage.getItem(key);
  if (stored) return JSON.parse(stored);
  localStorage.setItem(key, JSON.stringify(initial));
  return initial;
}

function setStoredData<T>(key: string, data: T[]) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getCourses(): Course[] {
  return getStoredData(STORAGE_KEYS.courses, initialCourses);
}

export function setCourses(courses: Course[]) {
  setStoredData(STORAGE_KEYS.courses, courses);
}

export function getColleges(): College[] {
  return getStoredData(STORAGE_KEYS.colleges, initialColleges);
}

export function setColleges(colleges: College[]) {
  setStoredData(STORAGE_KEYS.colleges, colleges);
}

export function getLeads(): StudentLead[] {
  return getStoredData(STORAGE_KEYS.leads, initialLeads);
}

export function addLead(lead: StudentLead) {
  const leads = getLeads();
  leads.push(lead);
  setStoredData(STORAGE_KEYS.leads, leads);
}

export function validateAdmin(email: string, password: string): boolean {
  return adminUsers.some(u => u.email === email && u.password === password && u.role === "admin");
}

export function isAdminLoggedIn(): boolean {
  return sessionStorage.getItem("inspireone_admin") === "true";
}

export function loginAdmin() {
  sessionStorage.setItem("inspireone_admin", "true");
}

export function logoutAdmin() {
  sessionStorage.removeItem("inspireone_admin");
}
