import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [storeOpen, setStoreOpen] = useState(false);
  const [storeOpenMobile, setStoreOpenMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Check login
  useEffect(() => {
    const checkLogin = () => {
      const user = localStorage.getItem("userEmail");
      setIsLoggedIn(!!user);
    };

    checkLogin();
    window.addEventListener("storage", checkLogin);

    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
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
      className={`nav fixed w-full top-0 left-0 z-50 transition-all duration-300
        ${isHome
          ? scrolled
            ? "bg-[#3e729a] shadow-lg"
            : "bg-transparent"
          : "bg-[#3e729a] shadow-lg"
        } text-white`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <span className="text-blue-900 font-extrabold">Health</span>
          Advance
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-xl items-center">
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              {!item.subItems ? (
                <Link to={item.path} className="hover:text-yellow-300">
                  {item.name}
                </Link>
              ) : (
                <>
                  <div
                    onMouseEnter={() => setStoreOpen(true)}
                    onMouseLeave={() => setStoreOpen(false)}
                    className="flex items-center gap-1 hover:text-yellow-300"
                  >
                    <Link to={item.path} className="flex items-center gap-1">
                      {item.name}
                    </Link>
                    <ChevronDown size={16} />
                  </div>

                  {storeOpen && (
                    <ul
                      onMouseEnter={() => setStoreOpen(true)}
                      onMouseLeave={() => setStoreOpen(false)}
                      className="absolute top-full left-0 bg-white text-gray-800 rounded-md shadow-lg py-2 mt-2 min-w-[150px]"
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

          {/* Login / Logout */}
          {!isLoggedIn ? (
            <li>
              <Link
                to="/login"
                className="bg-[#FFA02E] hover:bg-[#FF8C00] py-2 px-4 rounded-md transition"
              >
                Join Us
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/" onClick={handleLogout} className="hover:text-yellow-300">
                Logout
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-96 py-4 bg-[#3e729a]" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col gap-4 px-6 text-lg">

          {menuItems.map((item) => (
            <li key={item.name}>
              {!item.subItems ? (
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block hover:text-gray-300"
                >
                  {item.name}
                </Link>
              ) : (
                <div>
                  <div className="flex justify-between items-center">
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className="flex-1"
                    >
                      {item.name}
                    </Link>

                    <button
                      onClick={() =>
                        setStoreOpenMobile(!storeOpenMobile)
                      }
                    >
                      <ChevronDown
                        size={16}
                        className={`${storeOpenMobile ? "rotate-180" : ""
                          } transition`}
                      />
                    </button>
                  </div>

                  {storeOpenMobile && (
                    <ul className="pl-4 mt-2">
                      {item.subItems.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.path}
                            onClick={() => setOpen(false)}
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

          {/* Mobile Login/Logout */}
          {!isLoggedIn ? (
            <Link to="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link
              to="/"
              onClick={() => {
                handleLogout();
                setOpen(false);
              }}
            >
              Logout
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;