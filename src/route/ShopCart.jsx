import React, { useState } from "react";

const ShopCart = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [quantity, setQuantity] = useState(1);

  const pricePerUnit = 1490;
  const deliveryCharge = 60;
  const subtotal = pricePerUnit * quantity;
  const total = subtotal + deliveryCharge;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleQuantityChange = (operation) => {
    setQuantity((prev) => (operation === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Order placed successfully! Total Amount: ৳${total}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-600 to-teal-800 flex items-center justify-center px-4 py-10">
      <div className="bg-white p-8 shadow-2xl rounded-lg w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Header Section */}
        <div className="col-span-full text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-teal-700 mb-4">
            📦 Place Your Order Now!
          </h1>
          <p className="text-lg text-gray-600">
            Fill out the form below to order your product. 💬 We will confirm your order shortly!
          </p>
        </div>

        {/* Left Side: Billing Details */}
        <div>
          <h2 className="text-xl font-semibold mb-6 text-center lg:text-left text-teal-800">
            📝 Fill in Your Details:
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter your mobile number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                District<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter your District"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter your delivery address"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Right Side: Order Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center lg:text-left text-teal-800">
            🛒 Your Order Summary:
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-6">
            {/* Product Details */}
            <div className="flex items-center space-x-4">
              <img
                src="https://smartorganicshop.xyz/wp-content/uploads/2024/09/WhatsApp-Image-2024-10-19-at-13.03.00_cb880783-1024x1024.jpg" // Replace with actual product image URL
                alt="Product"
                className="w-16 h-16 rounded-lg object-cover shadow-sm"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-800">SAFFRON</h3>
                <p className="text-sm text-gray-600">৳{pricePerUnit} per unit</p>
              </div>
            </div>

            {/* Quantity Control */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => handleQuantityChange("decrease")}
                  className="px-4 py-2 bg-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-400 transition duration-300"
                >
                  -
                </button>
                <span className="text-base font-medium">{quantity}</span>
                <button
                  type="button"
                  onClick={() => handleQuantityChange("increase")}
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition duration-300"
                >
                  +
                </button>
              </div>
              <span className="text-base font-medium text-gray-800">
                Subtotal: ৳{subtotal}
              </span>
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>৳{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charge:</span>
                <span>৳{deliveryCharge}</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-800">
                <span>Total:</span>
                <span>৳{total}</span>
              </div>
            </div>

            {/* Payment Option */}
            <div>
              <h4 className="text-md font-semibold text-gray-800">
                💵 Cash on Delivery
              </h4>
              <p className="text-sm text-gray-600">
                Pay with cash upon delivery. No extra charges!
              </p>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-6 w-full bg-teal-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-teal-700 transition duration-300 shadow-lg transform hover:-translate-y-1"
          >
            Place Order (৳{total})
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
