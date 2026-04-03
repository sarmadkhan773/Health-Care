import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const statsRef = useRef(null);
  const [counted, setCounted] = useState(false);
  const [patients, setPatients] = useState(0);
  const [medicines, setMedicines] = useState(0);
  const [uptime, setUptime] = useState(0);
  const [hospitals, setHospitals] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true);
          animateCount(0, 500000, 1000, setPatients);
          animateCount(0, 10000000, 1000, setMedicines);
          animateCount(0, 99.9, 1000, setUptime);
          animateCount(0, 50, 1000, setHospitals);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [counted]);

  // Generic number animation function
  const animateCount = (start, end, duration, setter) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Faster increment: ceil for large numbers
      const value =
        end > 1000
          ? Math.ceil(start + (end - start) * progress)
          : (start + (end - start) * progress).toFixed(1);
      setter(value);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  };
  let map;

  function initMap() {
    const location = { lat: 30.1575, lng: 71.5249 }; // Multan

    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: location,
    });

    // Show nearby hospitals
    const service = new google.maps.places.PlacesService(map);

    service.nearbySearch({
      location: location,
      radius: 5000,
      type: "hospital"
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(place => {
          new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name
          });
        });
      }
    });
  }
  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center text-center" data-aos="fade-up">

        <img
          src="https://merisehat.pk/_next/image?url=https%3A%2F%2Fd1irpg7po1rqdm.cloudfront.net%2Fmedia%2F4dTsghAUk2O19tOjrI8EIaxbE8USJFv5yLE51bi0.webp&w=1920&q=75"
          alt="Medical Store"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">HealthAdvance Care</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 max-w-2xl mx-auto">
            Revolutionizing healthcare with cutting-edge technology, personalized care, and unparalleled service excellence.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
            Learn More
          </button>
        </div>

      </section>

      {/* Mission and Vision */}
      <section className="mt-20 bg-gray-100">
        <div className="py-15 px-6 max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-xl shadow-md border-l-4 border-amber-600"  data-aos="fade-right" data-aos-offset="200"   // start animation 200px before entering viewport
        data-aos-duration="1200"
        data-aos-easing="ease-out-cubic">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At <span className="font-semibold text-gray-900">HealthAdvance</span>, our mission is to democratize healthcare by providing comprehensive, accessible, and efficient solutions. We empower patients, streamline operations for providers, and deliver top-tier customer care to ensure every individual receives the quality health services they deserve.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-md border-l-4 border-amber-600" data-aos="fade-left" data-aos-offset="200"   // start animation 200px before entering viewport
        data-aos-duration="1200"
        data-aos-easing="ease-out-cubic">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the global leader in integrated healthcare platforms, fostering innovation, trust, and wellness for a healthier world. We envision a future where technology bridges gaps, making premium healthcare available to all, regardless of location or circumstance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12"> HealthAdvance Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <img
                src="https://img.freepik.com/premium-photo/pharmaceutical-sales-representative-presenting-medication-doctor-medical-office-shaking-hands_144356-11076.jpg"
                alt="Medicine sales"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Medicine Sales</h3>
              <p className="text-gray-600">
                Access a curated selection of high-quality pharmaceuticals with secure, fast delivery and expert consultations.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Patient management"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Advanced Patient Management</h3>
              <p className="text-gray-600">
                Streamline patient records, appointments, and care plans with our intuitive, HIPAA-compliant platform.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Customer care"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Premium Customer Care</h3>
              <p className="text-gray-600">
                Our dedicated support team ensures personalized assistance, from telemedicine to emergency responses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics with Count Animation */}
      <div
        ref={statsRef}
        className="py-16 px-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">{patients.toLocaleString()}+</div>
              <p className="text-lg">Patients Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{medicines.toLocaleString()}+</div>
              <p className="text-lg">Medicines Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{uptime}%</div>
              <p className="text-lg">Uptime Reliability</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{hospitals}+</div>
              <p className="text-lg">Partner Hospitals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              alt="User testimonial"
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-700 italic mb-4">
              "HealthAdvance transformed my healthcare experience. The platform is intuitive, and the customer care is exceptional."
            </p>
            <p className="font-semibold text-gray-800">- Dr. Emily Carter, Physician</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              alt="User testimonial"
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-700 italic mb-4">
              "As a patient, I appreciate the seamless medicine delivery and personalized support. Highly recommend!"
            </p>
            <p className="font-semibold text-gray-800">- John Doe, Patient</p>
          </div>
        </div>
      </div>

      {/* MAP */}
      <section className="px-6 pb-20">
        <h2 className="text-3xl font-bold mb-4 text-center">Nearby Hospitals</h2>
        <div className="h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="map"
            width="100%"
            height="100%"
            loading="lazy"
            src="https://www.google.com/maps?q=30.1575,71.5249&z=13&output=embed"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default About;
