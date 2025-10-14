import useStore from "../store/useStore";
import { useState } from "react";

function OrdersPage() {
  const products = useStore((state) => state.products);
  const orders = useStore((state) => state.orders);
  const addOrder = useStore((state) => state.addOrder);
  const deleteOrder = useStore((state) => state.deleteOrder);
  const changeStatus = useStore((state) => state.changeStatus);

  const [clientName, setClientName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleAddOrder = (e) => {
    e.preventDefault();
    const product = products.find((p) => p.name === selectedProduct);
    if (!product) return alert("Produit introuvable");
    const total = product.price * quantity;
    addOrder({ name: clientName, product: product.name, quantity, total, status: "En attente" });
    setClientName("");
    setSelectedProduct("");
    setQuantity(1);
  };

  return (
    <div>
      <h1>Gestion des Commandes</h1>

      <form onSubmit={handleAddOrder}>
        <input
          type="text"
          placeholder="Nom du client"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          <option value="">Choisir un produit</option>
          {products.map((p) => (
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
        </select>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button type="submit">Ajouter</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Total</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, i) => (
            <tr key={i}>
              <td>{o.name}</td>
              <td>{o.product}</td>
              <td>{o.quantity}</td>
              <td>{o.total} MAD</td>
              <td>{o.status}</td>
              <td>
                <button onClick={() => deleteOrder(i)}>Supprimer</button>
                <button onClick={() => changeStatus(i, o.status === "En attente" ? "Terminé" : "En attente")}>
                  Changer statut
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
