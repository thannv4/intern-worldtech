import React, { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Order.scss";

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const storedOrders = useMemo(() => {
    return JSON.parse(localStorage.getItem("orderData")) || [];
  }, []);

  const { formData, toppings, totalPrice } = location.state || {};

  useEffect(() => {
    if (!toppings || !totalPrice) {
      navigate("/order");
      return;
    }

    const newOrder = { formData, toppings, totalPrice };
    const orderExists = storedOrders.some(
      (order) => JSON.stringify(order) === JSON.stringify(newOrder)
    );

    if (!orderExists) {
      const updatedOrders = [...storedOrders, newOrder];
      localStorage.setItem("orderData", JSON.stringify(updatedOrders));
    }
  }, [formData, toppings, totalPrice, navigate, storedOrders]);

  return (
    <div className="order-page">
      {Array.isArray(storedOrders) && storedOrders.length > 0 ? (
        <table className="order-table">
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {storedOrders.map((order, index) => (
              <tr key={index}>
                <td>
                  <ul className="topping-list">
                    {Object.entries(order.toppings).map(
                      ([topping, quantity]) => (
                        <li key={topping}>
                          {topping.charAt(0).toUpperCase() + topping.slice(1)} (
                          {quantity})
                        </li>
                      )
                    )}
                  </ul>
                </td>
                <td>${order.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Order;
