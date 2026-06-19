```tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateAdmin, loginAdmin } from "@/lib/data";
import { toast } from "sonner";

const AdminLoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      if (validateAdmin(email, password)) {
        loginAdmin();
        toast.success("Login successful");
        navigate("/admin");
      } else {
        toast.error("Invalid credentials");
      }

      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 hero-gradient">
      <div className="w-full max-w-sm">
        <div className="bg-background p-8 rounded-lg border border-border card-teal">
          <h1 className="font-heading text-3xl font-bold text-foreground text-center mb-2">
            Admin Login
          </h1>

          <p className="text-muted-foreground text-center text-sm mb-8">
            Sign in to manage courses, colleges, and inquiries.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@inspireone.com"
                className="w-full border border-border rounded-md px-4 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Password
              </label>

              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-border rounded-md px-4 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-teal !py-3 disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
```
