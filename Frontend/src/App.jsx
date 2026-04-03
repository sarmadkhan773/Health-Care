import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "./components/layouts/MainLayout.jsx";
import Home from "./components/pages/Home.jsx";
import Products from "./components/pages/Products.jsx";
import Patients from "./components/pages/Patients.jsx";
import Customers from "./components/pages/Customers.jsx";
import Cart from "./components/pages/Cart.jsx";
import About from "./components/pages/About.jsx";
import Login from './components/pages/login.jsx';
import Signup from './components/pages/Signup.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/healthcare' element={<MainLayout><Home /></MainLayout>} />
        <Route path='/products' element={<MainLayout><Products /></MainLayout>} />
        <Route path='/patients' element={<MainLayout><Patients /></MainLayout>} />
        <Route path='/customers' element={<MainLayout><Customers /></MainLayout>} />
        <Route path='/cart' element={<MainLayout><Cart /></MainLayout>} />
        <Route path='/about' element={<MainLayout><About /></MainLayout>} />
      </Routes>
    </Router>
  );
};

export default App;