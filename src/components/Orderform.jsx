import React, { useState } from "react";
import products from "../data/products";

function OrderForm({ onAddOrder }) {
  const [pDelete , setpDelete ]= useState("");
  const [name, setName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(0);
  

  const ajoutSubmit = (e) => {
    e.preventDefault();

    const product = products.find((p) => p.name === selectedProduct);
    const newOrder = {
      name,
      product: selectedProduct,
      quantity,
      total: product.price * quantity,
      
    };

    onAddOrder(newOrder);
    setName("");
    setSelectedProduct("");
    setQuantity(0);
  };

  return (
    <div
      style={{
        width: "90%",
        background: "#c5c7d2ff",
        padding: "20px",
        borderRadius: "10px",
        margin: "auto",
      }}
    >
      <h2 style={{ color: "#2f3640", marginBottom: "15px" , textAlign:"center" }}> Créer une Commande</h2>
      <form onSubmit={ajoutSubmit}>
        <input
          type="text"
          placeholder="Nom du client"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding:"8px , solid" ,
            borderRadius: "10px",
            fontSize: "14px",
            margin:"20px"
          }}
        />

        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          style={{
            padding:"8px , solid" ,
            borderRadius: "10px",
            fontSize: "14px",
            margin:"20px"
          }}
        >
          <option value="">Choisir un produit</option>
          {products.map((p) => (
            <option key={p.name} value={p.name}>
              {p.name} - {p.price} MAD
              
            </option>
          ))}
        </select>

        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          style={{
            padding:"8px , solid" ,
            borderRadius: "10px",
            fontSize: "14px",
            margin:"20px"
          }}
        />

        <button type="submit"
        style={{
            padding: "10px",
            backgroundColor: "#00a8ff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.5s",}}> Ajouter</button>
      </form>
    </div>
  );
}

export default OrderForm;
