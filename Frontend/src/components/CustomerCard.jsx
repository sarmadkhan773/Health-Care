import { Mail, Phone, MapPin } from "lucide-react";

const CustomerCard = ({ customer }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-gray-100">
      
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center text-white text-xl font-bold">
          {customer.name.charAt(0)}
        </div>
        <h2 className="text-xl font-bold text-gray-800">
          {customer.name}
        </h2>
      </div>

      <div className="space-y-3 text-gray-600">
        <div className="flex items-center gap-2">
          <Mail size={18} className="text-teal-600" />
          <span>{customer.email}</span>
        </div>

        <div className="flex items-center gap-2">
          <Phone size={18} className="text-teal-600" />
          <span>{customer.phone}</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-teal-600" />
          <span>{customer.address}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;