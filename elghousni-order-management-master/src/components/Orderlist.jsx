import useStore from "../store/useStore";

function OrderList() {
  const orders = useStore((state) => state.orders);
  const deleteOrder = useStore((state) => state.deleteOrder);
  const changeStatus = useStore((state) => state.changeStatus);

  return (
    <div
      style={{
        width: "90%",
        background: "#9699a7ff",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Orders List</h2>
      {orders.length === 0 ? (
        <p style={{ textAlign: "center" }}>No orders yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Client</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
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
                  <button onClick={() => deleteOrder(i)}>Delete</button>
                  <button
                    onClick={() =>
                      changeStatus(i, order.status === "Pending" ? "Completed" : "Pending")
                    }
                  >
                    Change Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrderList;
