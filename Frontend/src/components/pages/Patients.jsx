import { useState, useEffect } from "react";
import PatientCard from "../PatientCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { Search, Filter } from "lucide-react";

const initialPatients = [
  { 
    id: 1, 
    name: 'John Doe', 
    age: 30, 
    condition: 'Flu', 
    severity: 'Mild', 
    lastVisit: '2026-03-15', 
    phone: '+92 300 1234567', 
    email: 'john@example.com', 
    profile: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    age: 25, 
    condition: 'Cold', 
    severity: 'Moderate', 
    lastVisit: '2026-03-10', 
    phone: '+92 301 7654321', 
    email: 'jane@example.com', 
    profile: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  { 
    id: 3, 
    name: 'Ali Khan', 
    age: 40, 
    condition: 'Diabetes', 
    severity: 'Severe', 
    lastVisit: '2026-03-05', 
    phone: '+92 302 1112233', 
    email: 'ali@example.com', 
    profile: 'https://randomuser.me/api/portraits/men/54.jpg'
  },
];

const Patients = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSeverity, setFilterSeverity] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterSeverity(e.target.value);
  };

  const filteredPatients = patients.filter(patient => {
    return (
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterSeverity ? patient.severity === filterSeverity : true)
    );
  });

  return (
    <div className="w-full min-h-screen bg-gray-50">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-center" data-aos="fade-up">
        <img
          src="https://nbhc.ca/sites/default/files/assets/images/Article%20image.jpg"
          alt="Medical Store"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Our Patients
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-lg mt-2">
            Monitor patients’ health records, appointments, and medical details — all in one dashboard.
          </p>
        </div>
      </section>

      {/* ================= SEARCH & FILTER ================= */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-10 px-6">
        <div className="flex items-center bg-white shadow-md rounded-xl px-4 py-2 w-full md:w-1/2">
          <Search size={20} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search patients by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-gray-700 font-medium">Filter Severity:</label>
          <select
            value={filterSeverity}
            onChange={handleFilter}
            className="px-4 py-2 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">All</option>
            <option value="Mild">Mild</option>
            <option value="Moderate">Moderate</option>
            <option value="Severe">Severe</option>
          </select>
        </div>
      </div>

      {/* ================= PATIENT CARDS ================= */}
      <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {filteredPatients.length > 0 ? (
          filteredPatients.map(patient => (
            <PatientCard key={patient.id} patient={patient} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full mt-10">
            No patients found with these criteria.
          </p>
        )}
      </div>
    </div>
  );
}

export default Patients;