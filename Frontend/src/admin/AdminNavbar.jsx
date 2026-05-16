import { Bell, Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <button className="lg:hidden">
          <Menu />
        </button>

        <h2 className="text-2xl font-bold text-gray-800">
          Admin Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-gray-100 rounded-xl px-4 py-2">
          <Search className="text-gray-400" size={18} />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2"
          />
        </div>

        <Link to="/admin/notifications" className="relative bg-gray-100 p-3 rounded-xl hover:bg-gray-200 transition">
          <Bell size={20} />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>
        </Link>

        <img
          src="https://i.pravatar.cc/100"
          alt="Admin"
          className="w-11 h-11 rounded-full border-2 border-teal-500"
        />
      </div>
    </div>
  );
};

export default AdminNavbar;