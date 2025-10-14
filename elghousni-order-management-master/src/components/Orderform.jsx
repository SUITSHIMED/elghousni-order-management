import { useState } from "react";
import useStore from "../store/useStore";

function OrderForm() {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const addOrder = useStore((state) => state.addOrder);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !product || !quantity) {
      alert("Please fill all fields");
      return;
    }

    const newOrder = {
      name,
      product,
      quantity: Number(quantity),
      total: quantity * 20, // Example price per product
      status: "Pending",
    };

    addOrder(newOrder);
    setName("");
    setProduct("");
    setQuantity(1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        background: "#dcdde1",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Create Order</h2>
      <input
        type="text"
        placeholder="Client name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit">Add Order</button>
    </form>
  );
}

export default OrderForm;
