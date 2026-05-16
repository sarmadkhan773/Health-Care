const Appointments = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Manage Appointments
      </h1>

      <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Patient</th>
              <th className="p-3">Doctor</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-3">Sara Ahmed</td>
              <td className="p-3">Dr. Bilal</td>
              <td className="p-3">15 May 2026</td>
              <td className="p-3 text-green-600 font-semibold">
                Confirmed
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;