import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const userEmail = localStorage.getItem("userEmail"); // ✅ define userEmail
  const [cartItems, setCartItems] = useState([]);

  // ================= FETCH CART FROM BACKEND =================
  useEffect(() => {
    const fetchCart = async () => {
      if (!userEmail) return;

      try {
        const res = await fetch(`http://localhost:5000/cart/${userEmail}`);
        const data = await res.json();
        setCartItems(data);
      } catch (err) {
        console.error("Error fetching cart:", err);
      }
    };

    fetchCart();
  }, [userEmail]);

  // ================= CALCULATE TOTAL =================
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // ================= DELETE ITEM =================
  const handleDelete = async (_id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/cart?_id=${_id}&userEmail=${encodeURIComponent(userEmail)}`,
        { method: "DELETE" }
      );

      if (!res.ok) {
        const text = await res.text(); // sometimes HTML error page
        throw new Error(`Delete failed: ${text}`);
      }

      const data = await res.json();
      console.log("Deleted:", data);

      setCartItems(cartItems.filter((item) => item._id !== _id));
    } catch (err) {
      console.error(err);
      alert("Delete failed. Check console for details.");
    }
  };

  // ================= CHECKOUT =================
  const handleCheckout = () => {
    if (cartItems.length === 0) return alert("Your cart is empty!");
    alert("Proceeding to payment...");
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center" data-aos="fade-up">
        <img
          src="https://future-mbbs.com/wp-content/uploads/2024/07/shutterstock_2505610267-scaled.jpg"
          alt="Medical Store"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 text-white">
            Your Healthcare Cart
          </h1>
          <p className="text-sm md:text-lg text-white/90">
            Browse high-quality medicines, painkillers, and healthcare products in your cart.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id} // use MongoDB _id
                className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-teal-600 font-semibold mt-1">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="mt-3 sm:mt-0 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition shadow"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}

            {/* Checkout Summary */}
            <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-6 rounded-2xl shadow-lg">
              <p className="text-xl font-bold text-gray-800">
                Total: <span className="text-teal-600">${total}</span>
              </p>
              <button
                onClick={handleCheckout}
                className="mt-3 sm:mt-0 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition shadow"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;