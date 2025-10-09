import React, { useState } from "react";
import products from "../data/products";

function OrderForm({ onAddOrder }) {
  const [name, setName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !selectedProduct) return alert("Please fill all fields");

    const product = products.find((p) => p.name === selectedProduct);
    const newOrder = {
      name,
      product: selectedProduct,
      quantity,
      total: product.price * quantity,
      status: "En attente",
    };

    onAddOrder(newOrder);
    setName("");
    setSelectedProduct("");
    setQuantity(1);
  };

  return (
    <div
      style={{
        width: "90%",
        background: "#f1f2f6",
        padding: "20px",
        borderRadius: "10px",
        margin: "auto",
      }}
    >
      <h2>Créer une Commande</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom du client"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
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
        />

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default OrderForm;
