import CustomerCard from "../CustomerCard";

const customers = [
  {
    id: 1,
    name: "Ali Khan",
    email: "ali@example.com",
    phone: "1234567890",
    address: "Wah Cantt",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    email: "sara@example.com",
    phone: "0987654321",
    address: "Islamabad",
  },
];

const Customers = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center text-center" data-aos="fade-up">
        <img
          src="https://wpcdn.ncqa.org/www-prod/2018/08/Consumers_ldp.jpg"
          alt="Healthcare Team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Our Valuable Customers
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            We proudly serve trusted customers across multiple cities with
            quality healthcare services.
          </p>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center px-6">
          <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-4xl font-bold text-teal-600">250+</h2>
            <p className="text-gray-600 mt-2">Active Customers</p>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-4xl font-bold text-teal-600">15+</h2>
            <p className="text-gray-600 mt-2">Cities Served</p>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-4xl font-bold text-teal-600">99%</h2>
            <p className="text-gray-600 mt-2">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* ================= CUSTOMER GRID ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Customer Directory
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {customers.map((customer) => (
              <CustomerCard key={customer.id} customer={customer} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-teal-600 py-16 text-center text-white mb-20">
        <h2 className="text-3xl font-bold mb-4">
          Want to Become Our Customer?
        </h2>
        <p className="mb-6 text-white/90">
          Join hundreds of satisfied customers and experience premium healthcare service.
        </p>
        <button className="bg-white text-teal-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition shadow-lg">
          Register Now
        </button>
      </section>
    </div>
  );
};

export default Customers;