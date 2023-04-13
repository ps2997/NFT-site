import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/pages/form.css";

const Form = () => {
  const [registerNumber, setRegisterNumber] = useState("");
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [warehouseLocation, setWarehouseLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access the form data from the state variables (registerNumber, category, productName, price, warehouseLocation)
    console.log("Form submitted:", {
      registerNumber,
      category,
      productName,
      price,
      warehouseLocation,
    });
  };

  return (
    <motion.div className="form"
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:1}}
    >
      <div className="heading">
        <h1>Enter Product Details</h1>
      </div>

      <form className="main-form" onSubmit={handleSubmit}>
        <div className="form-values">
          <h2>Register Number</h2>
          <input
            type="number"
            id="registerNumber"
            value={registerNumber}
            onChange={(e) => setRegisterNumber(e.target.value)}
          />
        </div>

        <div className="form-values">
          <h2>Category</h2>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="form-values">
          <h2>Product Name</h2>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="form-values">
          <h2>Price</h2>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-values">
          <h2>Warehouse Location</h2>
          <input
            type="text"
            id="warehouseLocation"
            value={warehouseLocation}
            onChange={(e) => setWarehouseLocation(e.target.value)}
          />
        </div>
        <div className="submit-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </motion.div>
  );
};

export default Form;
