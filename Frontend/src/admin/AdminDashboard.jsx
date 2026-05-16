import {
  Users,
  UserRound,
  CalendarCheck,
  Activity,
} from "lucide-react";

import AdminLayout from "../components/layouts/AdminLayout";
import StatsCard from "./StatsCard";

const AdminDashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard
          title="Doctors"
          value="24"
          icon={<UserRound size={34} />}
        />

        <StatsCard
          title="Patients"
          value="320"
          icon={<Users size={34} />}
        />

        <StatsCard
          title="Appointments"
          value="89"
          icon={<CalendarCheck size={34} />}
        />

        <StatsCard
          title="Active Cases"
          value="17"
          icon={<Activity size={34} />}
        />
      </div>

      <div className="bg-white rounded-3xl shadow-md mt-8 p-6 overflow-x-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Recent Appointments
          </h2>

          <button className="bg-teal-600 text-white px-5 py-2 rounded-xl hover:bg-teal-700 transition">
            View All
          </button>
        </div>

        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="p-4 text-left">Patient</th>
              <th className="p-4 text-left">Doctor</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="p-4">Ali Khan</td>
              <td className="p-4">Dr. Ahmed</td>
              <td className="p-4">12 May 2026</td>
              <td className="p-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                  Completed
                </span>
              </td>
            </tr>

            <tr className="border-b hover:bg-gray-50 transition">
              <td className="p-4">Sara Ahmed</td>
              <td className="p-4">Dr. Bilal</td>
              <td className="p-4">14 May 2026</td>
              <td className="p-4">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </>
  );
};

export default AdminDashboard;