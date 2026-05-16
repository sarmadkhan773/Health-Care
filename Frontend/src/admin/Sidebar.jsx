import {
  LayoutDashboard,
  Users,
  UserRound,
  CalendarCheck,
  BarChart3,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin",
    },
    {
      name: "Doctors",
      icon: <UserRound size={20} />,
      path: "/admin/doctors",
    },
    {
      name: "Patients",
      icon: <Users size={20} />,
      path: "/admin/patients",
    },
    {
      name: "Appointments",
      icon: <CalendarCheck size={20} />,
      path: "/admin/appointments",
    },
    {
      name: "Analytics",
      icon: <BarChart3 size={20} />,
      path: "/admin/analytics",
    },
  ];

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 w-72 h-screen bg-gradient-to-b from-teal-700 to-teal-900 text-white flex-col p-6 shadow-2xl z-50">
      <h1 className="text-4xl font-black mb-12 leading-tight">
        Healthcare
        <br />
        Admin
      </h1>

      <nav className="space-y-3">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-white text-teal-700 shadow-lg"
                  : "hover:bg-white/10"
              }`
            }
          >
            {link.icon}
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;