 function Ordersummary({orders}) {
    const totalOrders = orders.length
    const totalQuantity = orders.reduce((sum, orders) => sum + Number(orders.quantity) , 0);
    const totalRevenue = orders.reduce((sum, orders) => sum + Number(orders.total) , 0);
     return (
    <div
      style={{
        width: "90%",
        background: "#5f5f61ff",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#2f3640", marginBottom: "15px" }}>Résumé</h2>
      <p>Total commandes: <strong>{totalOrders}</strong></p>
      <p>Total produits vendus: <strong>{totalQuantity}</strong></p>
      <p>Total : <strong>{totalRevenue} MAD</strong></p>
    </div>
  );


 } 
 export default Ordersummary;