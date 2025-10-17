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
    addOrder({
      name: clientName,
      product: product.name,
      quantity,
      total,
      status: "En attente",
    });
    setClientName("");
    setSelectedProduct("");
    setQuantity(1);
  };

  
  const styles = {
    page: {
      marginLeft: "240px",
      padding: "30px",
      backgroundColor: "#f1f2f6",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', sans-serif",
      boxSizing: "border-box",
    },
    title: {
      textAlign: "center",
      marginBottom: "30px",
      color: "#2f3542",
    },
    form: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
      marginBottom: "40px",
    },
    input: {
      padding: "10px 12px",
      border: "1px solid #ced6e0",
      borderRadius: "6px",
      fontSize: "14px",
    },
    select: {
      padding: "10px 12px",
      border: "1px solid #ced6e0",
      borderRadius: "6px",
      fontSize: "14px",
    },
    button: {
      backgroundColor: "#1e90ff",
      color: "white",
      border: "none",
      padding: "10px 18px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "0.2s",
    },
    table: {
      width: "90%",
      margin: "0 auto",
      borderCollapse: "collapse",
      background: "#fff",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
    },
    th: {
      backgroundColor: "#1e90ff",
      color: "white",
      padding: "12px",
      textAlign: "left",
    },
    td: {
      padding: "12px",
      borderBottom: "1px solid #dfe4ea",
    },
    actionBtn: {
      backgroundColor: "#70a1ff",
      color: "white",
      border: "none",
      padding: "6px 10px",
      marginRight: "5px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "13px",
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Gestion des Commandes</h1>

      <form onSubmit={handleAddOrder} style={styles.form}>
        <input
          type="text"
          placeholder="Nom du client"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          style={styles.input}
        />
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          style={styles.select}
        >
          <option value="">Choisir un produit</option>
          {products.map((p) => (
            <option key={p.id} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#3742fa")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#1e90ff")}
        >
          Ajouter
        </button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Client</th>
            <th style={styles.th}>Produit</th>
            <th style={styles.th}>Quantité</th>
            <th style={styles.th}>Total</th>
            <th style={styles.th}>Statut</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, i) => (
            <tr key={i}>
              <td style={styles.td}>{o.name}</td>
              <td style={styles.td}>{o.product}</td>
              <td style={styles.td}>{o.quantity}</td>
              <td style={styles.td}>{o.total} MAD</td>
              <td style={styles.td}>{o.status}</td>
              <td style={styles.td}>
                <button
                  style={styles.actionBtn}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#1e90ff")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#70a1ff")}
                  onClick={() => deleteOrder(i)}
                >
                  Supprimer
                </button>
                <button
                  style={styles.actionBtn}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#1e90ff")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#70a1ff")}
                  onClick={() =>
                    changeStatus(
                      i,
                      o.status === "En attente" ? "Terminé" : "En attente"
                    )
                  }
                >
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