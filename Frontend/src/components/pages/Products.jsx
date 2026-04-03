import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import AOS from "aos";
import "aos/dist/aos.css";

const productsData = [
  { id: 1, name: "Amoxicillin", description: "Antibiotic for infections", price: 15, category: "Antibiotics", image: "https://thecarepharmacy.com/wp-content/uploads/2025/03/amoxicillin.jpeg" },
  { id: 2, name: "Cefuroxime", description: "Antibiotic for bacterial infections", price: 20, category: "Antibiotics", image: "https://daplarpharmacy.com/wp-content/uploads/2024/09/IMG-20240828-WA0043.jpg" },
  { id: 3, name: "Azithromycin", description: "Used for respiratory infections", price: 20, category: "Antibiotics", image: "https://www.myvitaminstore.pk/cdn/shop/files/azomax-500-azithromycin-6-ct-508234.jpg?v=1713778130" },
  { id: 4, name: "Ciprofloxacin", description: "Treats urinary tract infections", price: 18, category: "Antibiotics", image: "https://fidson.com/wp-content/uploads/2022/09/Ciprofloxacin-500-768x768.png" },
  { id: 5, name: "Doxycycline", description: "Used for acne and bacterial infections", price: 12, category: "Antibiotics", image: "https://click2pharmacy.co.uk/wp-content/uploads/2025/12/Doxycycline-For-Sinusitis-Fast-Relief-For-Bacterial-Sinus-Infections-510x510.jpg" },
  { id: 6, name: "Cefixime", description: "Broad-spectrum antibiotic", price: 22, category: "Antibiotics", image: "https://newcesamex.com/site/wp-content/uploads/2023/11/CEFIXIM-400MG-Comp.jpg" },
  { id: 7, name: "Metronidazole", description: "Used for stomach and dental infections", price: 10, category: "Antibiotics", image: "https://www.thefamilychemist.co.uk/wp-content/uploads/2025/11/Product-Picture-20.png" },
  { id: 8, name: "Clindamycin", description: "Treats serious bacterial infections", price: 25, category: "Antibiotics", image: "https://res.cloudinary.com/oxford-online-pharmacy/image/upload/f_auto,w_410/clindamycin-benzyoyl-peroxide-gel-30g-generic-duac-aspire.jpg" },
  { id: 9, name: "Levofloxacin", description: "Used for lung and sinus infections", price: 28, category: "Antibiotics", image: "https://rascopharma.com/wp-content/uploads/2022/10/levofloxa-1.jpeg" },
  { id: 10, name: "Cephalexin", description: "Used for skin and respiratory infections", price: 16, category: "Antibiotics", image: "https://www.imexpharm.com/Data/Sites/1/Product/8716/Cephalexin-500mg.png" },
  { id: 11, name: "Erythromycin", description: "Alternative for penicillin allergy", price: 14, category: "Antibiotics", image: "https://www.medicopharm.com/images-3762246/erythromycin/api-e-m-erythromycin-freshwater-fish-bacterial-disease-medication-10-count.webp" },
  { id: 12, name: "Hydrocortisone Cream", description: "Skin irritation relief", price: 12, category: "SkinCare", image: "https://store.iloilosupermart.com/wp-content/uploads/2025/03/RITEMED-HYDROCORTISONE-CREAM-15G.jpg" },
  { id: 13, name: "Moisturizer", description: "For dry skin", price: 10, category: "SkinCare", image: "https://5.imimg.com/data5/SELLER/Default/2023/6/317798179/HD/HI/LJ/23436038/ponds-fresh-glow-light-moisturiser-cream-500x500.jpg" },
  { id: 14, name: "Paracetamol", description: "Fever reducer", price: 5, category: "Fever", image: "https://www.mccabespharmacy.com/cdn/shop/files/PfizerParacetamol500mgFilmCoatedTablets24Pack.jpg?v=1704467734&width=2000" },
  { id: 15, name: "Ibuprofen", description: "Pain & fever relief", price: 8, category: "Fever", image: "https://www.onestop.co.uk/wp-content/uploads/49ca911e-3215-4ee2-9a42-a44a4537151a.png" },
];

const categories = ["Antibiotics", "SkinCare", "Fever"];

const Products = () => {
  const userEmail = localStorage.getItem("userEmail");
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  // ================= SEARCH =================
  const handleSearch = () => {
    const results = productsData.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(results);
  };

  // ================= ADD TO CART =================
  const handleAddToCart = async (product) => {
    if (!userEmail) return alert("Please log in to add products to cart");

    try {
      const res = await fetch("http://localhost:5000/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail,
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image
        })
      });

      if (!res.ok) throw new Error("Failed to add to cart");

      const data = await res.json();
      alert(`${data.name} added to cart!`);
    } catch (err) {
      alert(err.message);
    }
  };

  // ================= BUY NOW =================
  const handleBuyNow = (product) => {
    if (!userEmail)
      return alert("Please log in to continue");

    const cart = [{ ...product, quantity: 1 }];

    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/cart"); // redirect to cart page
  };

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center" data-aos="fade-up">
        <img
          src="https://skydecengineers.com/wp-content/uploads/2023/09/medical-store.png"
          alt="Medical Store"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            Our Medical Store
          </h1>
          <p className="text-sm md:text-lg text-white/90 mb-6">
            Browse high-quality medicines and healthcare products.
          </p>
        </div>
      </section>

      {/* SEARCH */}
      {/* ================= SEARCH SECTION ================= */}
      <section className="mt-20 py-12 px-6 lg:px-20 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-3xl relative overflow-hidden" data-aos="fade-up">
        {/* Decorative Background Shapes */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Heading */}
        <div className="text-center mb-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Find Your Medicine
          </h2>
          <p className="text-white/80 max-w-xl mx-auto">
            Quickly search for medicines, healthcare products, and medical essentials available in our store.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center relative z-10">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full shadow-lg border-0 focus:ring-2 focus:ring-white/70 focus:outline-none text-gray-800 font-medium placeholder-gray-300 transition-all duration-300"
            />
            {/* Search Icon */}
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 11-10.61-10.61 7.5 7.5 0 0110.61 10.61z" />
            </svg>
            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-teal-600 px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-xl transition-all duration-300"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      {categories.map(category => {
        const categoryProducts = filteredProducts.filter(p => p.category === category);
        if (categoryProducts.length === 0) return null;

        return (
          <section key={category} className="py-16 px-6 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 border-b-2 border-teal-500 inline-block pb-2">
              {category}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {categoryProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={handleAddToCart}
                  buyNow={handleBuyNow}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Products;