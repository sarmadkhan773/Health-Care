import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HeartPulse, Mail, Lock, User, Eye, EyeOff } from "lucide-react";

const HealthcareSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("Creating account...");

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Account Created Successfully ");
        setName("");
        setEmail("");
        setPassword("");

        setTimeout(() => navigate("/login"), 1200);
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
    <div className="min-h-[120vh] flex items-center justify-center bg-gradient-to-br from-teal-900 to-slate-900 relative overflow-hidden">

      {/* Floating Circles (Same as Login) */}
      <div className="absolute w-48 h-48 bg-teal-500/30 rounded-full top-10 left-10 animate-pulse-slow"></div>
      <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full bottom-10 right-10 animate-pulse-slow"></div>

      {/* Signup Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md transition-transform duration-300 hover:scale-[1.02]">

        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 mb-3 animate-bounce">
            <HeartPulse className="text-teal-600 w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 animate-fadeIn">
            Create Account
          </h1>
          <p className="text-sm text-gray-500 mt-2 animate-fadeIn delay-200">
            Join Healthcare Portal
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div className="animate-fadeIn delay-300">
            <label className="text-sm text-gray-600">Full Name</label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none transition-all duration-300 hover:shadow-md"
                required
              />
            </div>
          </div>

          {/* Email */}
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

          {/* Password */}
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

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-xl font-medium transition-all duration-300 active:scale-95 hover:shadow-lg hover:shadow-teal-500/30 animate-fadeIn delay-700"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        {/* Message */}
        {message && (
          <div className="mt-4 text-center text-sm text-red-500 font-medium animate-pulse">
            {message}
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600 animate-fadeIn delay-800">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-500 font-medium hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthcareSignup;