import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeartPulse, Mail, Lock, Eye, EyeOff } from "lucide-react";

const HealthcareLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Checking credentials...");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("userEmail", data.email);
        setMessage("Login Successful ");
        setTimeout(() => navigate("/"), 1200);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Server Error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[120vh] h-full flex items-center justify-center bg-gradient-to-br from-teal-900 to-slate-900 relative overflow-hidden">

      {/* Floating animated circles */}
      <div className="absolute w-48 h-48 bg-teal-500/30 rounded-full top-10 left-10 animate-pulse-slow"></div>
      <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full bottom-10 right-10 animate-pulse-slow"></div>

      {/* Login Card (STILL, no float) */}
      <div className="relative bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md transition-transform duration-300 hover:scale-[1.02]">

        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 mb-3 animate-bounce">
            <HeartPulse className="text-teal-600 w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 animate-fadeIn">
            Healthcare Portal
          </h1>
          <p className="text-sm text-gray-500 mt-2 animate-fadeIn delay-200">
            Secure patient & staff login
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="animate-fadeIn delay-400">
            <label className="text-sm text-gray-600">Email Address</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300 hover:shadow-md"
                required
              />
            </div>
          </div>

          <div className="animate-fadeIn delay-500">
            <label className="text-sm text-gray-600">Password</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300 hover:shadow-md"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-500 transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm animate-fadeIn delay-600">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded border-gray-300" />
              Remember me
            </label>
            <a href="#" className="text-teal-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-xl font-medium transition-all duration-300 active:scale-95 hover:shadow-lg hover:shadow-teal-500/30 animate-fadeIn delay-700"
          >
            {loading ? "Signing in..." : "Sign In Securely"}
          </button>
        </form>

        {message && (
          <div className="mt-4 text-center text-sm text-red-500 font-medium animate-pulse">
            {message}
          </div>
        )}

        <div className="mt-6 text-center text-sm text-gray-600 animate-fadeIn delay-800">
          Don’t have an account?{" "}
          <a href="/signup" className="text-teal-500 font-medium hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default HealthcareLogin;