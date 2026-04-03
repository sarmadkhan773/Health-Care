import { User, FileText, HeartPulse } from "lucide-react";

const PatientCard = ({ patient }) => {
  return (
    <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-6 overflow-hidden group">
      {/* Gradient Hover Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 blur rounded-3xl transition"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <img
          src={patient.profile}
          alt={patient.name}
          className="w-24 h-24 rounded-full border-4 border-white shadow-md mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-gray-800">{patient.name}</h3>
        <p className="text-gray-500 mb-2">{patient.condition} ({patient.severity})</p>
        <p className="text-gray-500 text-sm mb-2">Age: {patient.age}</p>
        <p className="text-gray-500 text-sm mb-2">Last Visit: {patient.lastVisit}</p>
        <p className="text-gray-500 text-sm mb-2">Phone: {patient.phone}</p>
        <p className="text-gray-500 text-sm">Email: {patient.email}</p>

        <div className="flex gap-4 mt-4">
          <HeartPulse className="text-red-500 w-5 h-5" />
          <FileText className="text-blue-500 w-5 h-5" />
          <User className="text-green-500 w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default PatientCard;