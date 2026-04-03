import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [storeOpen, setStoreOpen] = useState(false);
  const [storeOpenMobile, setStoreOpenMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/healthcare";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const menuItems = [
    { name: "Home", path: "/healthcare" },
    {
      name: "Store",
      path: "/products",
      subItems: [
        { name: "Medicines", path: "/products/medicines" },
        { name: "Equipment", path: "/products/equipment" },
        { name: "Supplements", path: "/products/supplements" },
      ],
    },
    { name: "Patients", path: "/patients" },
    { name: "Customers", path: "/customers" },
    { name: "Cart", path: "/cart" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={`nav font-times fixed w-full top-0 left-0 z-50 transition-all duration-300 
        ${isHome
          ? scrolled
            ? "bg-[#3e729a] shadow-lg"
            : "bg-transparent"
          : "bg-[#3e729a] shadow-lg"
        } text-white`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide flex items-center gap-2">
          <span className="text-blue-900 py-1 rounded-md font-extrabold">Health</span>
          Advance
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex nav gap-8 text-xl font-normal items-center  tracking-wide">
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              {!item.subItems ? (
                <Link
                  to={item.path}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ) : (
                <>
                  <Link
                    to={item.path}
                    className="hover:text-yellow-300 transition-colors duration-300 flex items-center gap-1"
                    onMouseEnter={() => setStoreOpen(true)}
                    onMouseLeave={() => setStoreOpen(false)}
                  >
                    {item.name} <ChevronDown size={16} />
                  </Link>
                  {storeOpen && (
                    <ul
                      onMouseEnter={() => setStoreOpen(true)}
                      onMouseLeave={() => setStoreOpen(false)}
                      className="absolute top-full left-0 bg-white text-gray-800 rounded-md shadow-lg py-2 mt-2 min-w-[150px] z-50"
                    >
                      {item.subItems.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.path}
                            className="block px-4 py-2 hover:bg-yellow-200"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}

          <li>
            <Link
              to="/"
              onClick={() => localStorage.removeItem("userEmail")}
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Logout
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96 py-4 bg-[#3e729a] shadow-lg" : "max-h-0"}`}>
        <ul className="flex flex-col gap-4 px-6 text-lg font-normal font-times tracking-wide">
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              {!item.subItems ? (
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block hover:text-gray-300 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ) : (
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    {/* Clickable text navigates */}
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="block hover:text-gray-300 transition-colors duration-300 flex-1"
                    >
                      {item.name}
                    </Link>

                    {/* Arrow button toggles sub-menu */}
                    <button
                      onClick={() => setStoreOpenMobile(!storeOpenMobile)}
                      className="p-1 focus:outline-none"
                    >
                      <ChevronDown size={16} className={`${storeOpenMobile ? "rotate-180" : ""} transition-transform duration-300`} />
                    </button>
                  </div>

                  {/* Sub-menu */}
                  {storeOpenMobile && (
                    <ul className="flex flex-col pl-4 mt-2 gap-2">
                      {item.subItems.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.path}
                            onClick={() => setOpen(false)}
                            className="block hover:text-gray-300 transition-colors duration-300"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}

          {/* Mobile Logout */}
          <li>
            <Link
              to="/"
              onClick={() => { localStorage.removeItem("userEmail"); setOpen(false); }}
              className="block hover:text-gray-300 transition-colors duration-300"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;