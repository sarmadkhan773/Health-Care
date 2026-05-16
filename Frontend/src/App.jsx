import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout.jsx";

import Home from "./components/pages/Home.jsx";
import Products from "./components/pages/Products.jsx";
import Patients from "./components/pages/Patients.jsx";
import Customers from "./components/pages/Customers.jsx";
import Cart from "./components/pages/Cart.jsx";
import About from "./components/pages/About.jsx";
import Login from "./components/pages/Login.jsx";
import Signup from "./components/pages/Signup.jsx";

// ================= ADMIN PAGES =================
import AdminDashboard from "./admin/AdminDashboard.jsx";
import Doctors from "./admin/Doctors.jsx";
import Appointments from "./admin/Appointments.jsx";
import Analytics from "./admin/Analytics.jsx";
import AdminLayout from "./components/layouts/AdminLayout.jsx";
import Notification from "./admin/Notification.jsx";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>

        {/* ================= USER ROUTES ================= */}

        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={
            <MainLayout>
              <Login />
            </MainLayout>
          }
        />

        <Route
          path="/signup"
          element={
            <MainLayout>
              <Signup />
            </MainLayout>
          }
        />

        <Route
          path="/products"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        />

        <Route
          path="/patients"
          element={
            <MainLayout>
              <Patients />
            </MainLayout>
          }
        />

        <Route
          path="/customers"
          element={
            <MainLayout>
              <Customers />
            </MainLayout>
          }
        />

        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />

        {/* ================= ADMIN ROUTES ================= */}

        <Route
          path="/admin"
          element={<AdminLayout><AdminDashboard /></AdminLayout>}
        />

        <Route
          path="/admin/doctors"
          element={<AdminLayout><Doctors /></AdminLayout>}
        />


        <Route
          path="/admin/appointments"
          element={<AdminLayout><Appointments /></AdminLayout>}
        />

        <Route
          path="/admin/analytics"
          element={<AdminLayout><Analytics /></AdminLayout>}
        />

        <Route
          path="/admin/notifications"
          element={<AdminLayout><Notification /></AdminLayout>}
        />
      </Routes>
    </Router>
  );
};

export default App;