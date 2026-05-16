const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 border border-gray-100 hover:scale-[1.03] transition-transform duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-black mt-3 text-teal-600">
            {value}
          </h2>
        </div>

        <div className="bg-teal-100 text-teal-700 p-4 rounded-2xl">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;