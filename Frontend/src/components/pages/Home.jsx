import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HeartPulse, Users, ShoppingCart, Mail, Phone, MapPin, Send, User, FileText } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      mirror: true,
      disableMutationObserver: true,
    });
  }, []);
  return (
    <div className="mx-auto max-w-8xl">

      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        data-aos="fade-up"
      >
        {/* Background Image */}
        <img
          src="https://www.keckmedicine.org/wp-content/uploads/2021/11/Medical-doctors-and-nurse-practitioners-discuss-paperwork-in-a-hallway.jpg"
          alt="Healthcare illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 sm:px-10 lg:px-20 max-w-5xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
        >
          <h1 className="text-3xl  md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Welcome to HealthAdvance
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
            A modern healthcare platform designed for patient care, pharmacy management,
            and seamless medical operations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="w-full sm:w-auto btn text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition transform hover:scale-105"
            >
              Visit Store
            </Link>

            <Link
              to="/patients"
              className="w-full sm:w-auto btn text-white font-semibold px-8 py-3 rounded-xl transition transform hover:scale-105"
            >
              Manage Patients
            </Link>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section
        className="bg-white py-20 px-6 lg:px-20"
        data-aos="fade-up"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Latest Healthcare Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest medical news, healthcare tips, and expert
            insights from our professionals.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Blog Card 1 */}
          <div
            data-aos="fade-up"
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/0*Fk_E3p3IecWH-8Y8"
              alt="Healthcare Technology"
              className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-6">
              <span className="text-sm text-blue-600 font-medium">
                Technology
              </span>
              <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                How Technology is Transforming Healthcare
              </h3>
              <p className="text-gray-600 mb-4">
                Discover how AI, digital records, and automation are revolutionizing
                patient care and hospital management.
              </p>
              <Link
                to="/blog/healthcare-technology"
                className="text-blue-600 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src="https://images.unsplash.com/photo-1550831107-1553da8c8464"
              alt="Patient Care"
              className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-6">
              <span className="text-sm text-green-600 font-medium">
                Patient Care
              </span>
              <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                Best Practices for Quality Patient Care
              </h3>
              <p className="text-gray-600 mb-4">
                Learn essential strategies healthcare providers use to ensure safety,
                comfort, and trust for patients.
              </p>
              <Link
                to="/blog/patient-care"
                className="text-green-600 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
              alt="Pharmacy Management"
              className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-6">
              <span className="text-sm text-purple-600 font-medium">
                Pharmacy
              </span>
              <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                Smart Pharmacy Management Systems
              </h3>
              <p className="text-gray-600 mb-4">
                Explore how modern pharmacy systems improve accuracy, reduce errors,
                and enhance customer satisfaction.
              </p>
              <Link
                to="/blog/pharmacy-management"
                className="text-purple-600 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Review / Stats Section */}
      <section
        className="bg-gray-50 py-5 px-6 lg:px-20"
        data-aos="fade-up"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to deliver reliable healthcare solutions backed by
            experience, innovation, and dedicated professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center mb-20">
          <div data-aos="fade-up">
            <h3 className="text-4xl font-extrabold text-blue-600">10+</h3>
            <p className="text-gray-600 mt-2">Years of Experience</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-4xl font-extrabold text-green-600">5,000+</h3>
            <p className="text-gray-600 mt-2">Happy Patients</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-4xl font-extrabold text-purple-600">120+</h3>
            <p className="text-gray-600 mt-2">Medical Staff</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 m-10 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {/* Patients Card */}
        <Link
          to="/patients"
          data-aos="fade-up"
          className="group relative block rounded-2xl border border-gray-200 p-6 sm:p-8 bg-white shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-100 transition" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <HeartPulse className="text-blue-600 w-7 h-7" />
              <h2 className="text-2xl font-bold text-gray-800">Patients</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Securely manage patient profiles, medical records, appointments,
              and treatment history in one place.
            </p>
          </div>
        </Link>

        {/* Customers Card */}
        <Link
          to="/customers"
          data-aos="fade-up"
          data-aos-delay="100"
          className="group relative block rounded-2xl border border-gray-200 p-6 sm:p-8 bg-white shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-100 transition" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-teal-600 w-7 h-7" />
              <h2 className="text-2xl font-bold text-gray-800">Customers</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Track customer information, prescriptions, and purchase history
              with a streamlined and intuitive interface.
            </p>
          </div>
        </Link>

        {/* Store Card */}
        <Link
          to="/products"
          data-aos="fade-up"
          data-aos-delay="200"
          className="group relative block rounded-2xl border border-gray-200 p-6 sm:p-8 bg-white shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-100 transition" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="text-purple-600 w-7 h-7" />
              <h2 className="text-2xl font-bold text-gray-800">Store</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Browse and purchase medicines, medical equipment, and healthcare
              essentials with confidence and convenience.
            </p>
          </div>
        </Link>
      </section>

      {/* Advanced Services Section */}
      <section className="px-6 lg:px-20 mb-24">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our  Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Service 1 */}
          <div
            data-aos="fade-up"
            className="group relative bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition"></div>

            <div className="relative z-10">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition">
                <HeartPulse size={26} />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Patient Management
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Efficiently manage patient records, appointments, and treatment
                history with a secure and user-friendly system.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="group relative bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400 to-teal-500 opacity-0 group-hover:opacity-10 transition"></div>

            <div className="relative z-10">
              <div className="bg-green-100 text-green-600 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition">
                <Users size={26} />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Customer Handling
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track customer interactions, prescriptions, and history to deliver
                better service and build lasting relationships.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="group relative bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition"></div>

            <div className="relative z-10">
              <div className="bg-purple-100 text-purple-600 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition">
                <ShoppingCart size={26} />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Smart Pharmacy Store
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A seamless online store to browse and purchase medicines and
                healthcare products with ease and reliability.
              </p>
            </div>
          </div>

        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              Let’s Talk About Your Needs
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-md">
              Have a question, idea, or need support? Our team is ready to help you
              build better healthcare solutions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl shadow-sm">
                  <MapPin size={20} />
                </div>
                <span className="text-gray-700">Pakistan</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 text-green-600 p-3 rounded-xl shadow-sm">
                  <Mail size={20} />
                </div>
                <span className="text-gray-700">support@healthadvance.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-xl shadow-sm">
                  <Phone size={20} />
                </div>
                <span className="text-gray-700">+92 300 1234567</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div
            data-aos="fade-left"
            className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">
              Send a Message
            </h3>

            <form className="space-y-8">

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                {/* Name */}
                <div className="relative border-b border-gray-300 focus-within:border-blue-600 transition">
                  <div className="flex items-center gap-3">
                    <User size={18} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full py-3 bg-transparent outline-none placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative border-b border-gray-300 focus-within:border-blue-600 transition">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-gray-400" />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full py-3 bg-transparent outline-none placeholder-gray-400"
                    />
                  </div>
                </div>

              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                {/* Phone */}
                <div className="relative border-b border-gray-300 focus-within:border-blue-600 transition">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full py-3 bg-transparent outline-none placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="relative border-b border-gray-300 focus-within:border-blue-600 transition">
                  <div className="flex items-center gap-3">
                    <FileText size={18} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full py-3 bg-transparent outline-none placeholder-gray-400"
                    />
                  </div>
                </div>

              </div>

              {/* Message */}
              <div className="relative border-b border-gray-300 focus-within:border-blue-600 transition">
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full py-3 bg-transparent outline-none placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-md"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;