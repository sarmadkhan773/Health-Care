import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 lg:px-20">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            HealthAdvance
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            A modern healthcare platform focused on patient care, pharmacy
            management, and seamless digital healthcare solutions.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-yellow-100 transition cursor-pointer">Home</li>
            <li className="hover:text-yellow-100 transition cursor-pointer">Patients</li>
            <li className="hover:text-yellow-100 transition cursor-pointer">Store</li>
            <li className="hover:text-yellow-100 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-yellow-100 transition cursor-pointer">Patient Management</li>
            <li className="hover:text-yellow-100 transition cursor-pointer">Pharmacy System</li>
            <li className="hover:text-yellow-100 transition cursor-pointer">Online Store</li>
            <li className="hover:text-yellow-100 transition cursor-pointer">Healthcare Insights</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <div className="bg-white/10 p-2 rounded-lg hover:bg-blue-600 transition cursor-pointer">
              <Facebook size={18} />
            </div>
            <div className="bg-white/10 p-2 rounded-lg hover:bg-sky-500 transition cursor-pointer">
              <Twitter size={18} />
            </div>
            <div className="bg-white/10 p-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
              <Linkedin size={18} />
            </div>
            <div className="bg-white/10 p-2 rounded-lg hover:bg-pink-500 transition cursor-pointer">
              <Instagram size={18} />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} HealthAdvance. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;