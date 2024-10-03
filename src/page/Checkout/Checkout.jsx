import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.scss";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { toppings, totalPrice } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData, toppings, totalPrice);
    navigate("/order", {
      state: { formData, toppings, totalPrice },
    });
  };

  if (!toppings || !totalPrice) {
    return <div>Error: Missing checkout data.</div>;
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Your Burger:</h3>
        <div className="burger-image2">
          <input type="text" className="bread-top" readOnly value="" />
          {Object.entries(toppings).map(([topping, quantity]) =>
            quantity > 0 ? (
              <input
                key={topping}
                type="text"
                className={topping}
                readOnly
                value={`${
                  topping.charAt(0).toUpperCase() + topping.slice(1)
                } x${quantity}`}
              />
            ) : null
          )}
          <input type="text" className="bread-bottom" readOnly value="" />
        </div>
        <h3>Total Price: ${totalPrice}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone"></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address"></label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="note"></label>
          <textarea
            type="text"
            id="note"
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Note"
          />
        </div>

        <button type="submit" className="submit-order">
          Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
