

function OrderList({ orders }) {
  return (
    <div
      style={{
        width: "90%",
        background: "#f1f2f6",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Liste des Commandes</h2>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Total</th>
            <th>Statut</th>
          
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i}>
              <td>{order.name}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>
              <td>{order.total} MAD</td>
              <td>{order.status}</td>
              <td>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
