import AdminLayout from "../components/layouts/AdminLayout";

const Doctors = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black text-gray-800">
          Doctors Management
        </h1>

        <button className="bg-teal-600 text-white px-6 py-3 rounded-2xl hover:bg-teal-700 transition shadow-lg">
          Add Doctor
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-md overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="bg-gray-100 text-gray-600">
              <th className="p-5 text-left">Name</th>
              <th className="p-5 text-left">Specialization</th>
              <th className="p-5 text-left">Experience</th>
              <th className="p-5 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="p-5">Dr. Ahmed</td>
              <td className="p-5">Cardiologist</td>
              <td className="p-5">10 Years</td>

              <td className="p-5 flex gap-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-xl">
                  Edit
                </button>

                <button className="bg-red-500 text-white px-4 py-2 rounded-xl">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Doctors;