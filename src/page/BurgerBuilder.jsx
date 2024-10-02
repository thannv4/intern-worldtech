import React, { useState } from "react";
import "./BurgerBuilder.scss";

const BurgerBuilder = () => {
  const toppingPrices = {
    salad: 0.7,
    bacon: 1.5,
    cheese: 2.0,
    meat: 2.5,
  };

  const [toppings, setToppings] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  const calculateTotalPrice = () => {
    let total = 0;
    for (const topping in toppings) {
      total += toppings[topping] * toppingPrices[topping];
    }
    return total.toFixed(2);
  };

  const addTopping = (topping) => {
    setToppings((prevToppings) => ({
      ...prevToppings,
      [topping]: prevToppings[topping] + 1,
    }));
  };

  const removeTopping = (topping) => {
    setToppings((prevToppings) => ({
      ...prevToppings,
      [topping]: Math.max(0, prevToppings[topping] - 1),
    }));
  };

  return (
    <div>
    <div className="burger-builder">
      <h2>Build Your Burger</h2>
      <div className="burger">
        <div className="burger-image">
          <input type="text" className="bread-top" readOnly value="" />
          {toppings.salad > 0 && (
            <input
              type="text"
              className="salad"
              readOnly
              value={`Salad x${toppings.salad}`}
            />
          )}
          {toppings.bacon > 0 && (
            <input
              type="text"
              className="bacon"
              readOnly
              value={`Bacon x${toppings.bacon}`}
            />
          )}
          {toppings.cheese > 0 && (
            <input
              type="text"
              className="cheese"
              readOnly
              value={`Cheese x${toppings.cheese}`}
            />
          )}
          {toppings.meat > 0 && (
            <input
              type="text"
              className="meat"
              readOnly
              value={`Meat x${toppings.meat}`}
            />
          )}
          <input type="text" className="bread-bottom" readOnly value="" />
        </div>
        <h3>Total Price: ${calculateTotalPrice()}</h3>
      </div>
      <div className="toppings">
        {Object.keys(toppingPrices).map((topping) => (
          <div key={topping}>
            <label>
              {topping.charAt(0).toUpperCase() + topping.slice(1)}:{" "}
              
            </label>
            <div className="buttonss">
              <button onClick={() => removeTopping(topping)}>- Less</button>
              <button onClick={() => addTopping(topping)}>+ More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
        <div className="checkout">
        <button>Checkout</button>
        </div>
    </div>
  );
};

export default BurgerBuilder;
