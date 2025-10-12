
function OrderList({ orders , onDelete }) {
 
  return (
    <div
      style={{
        width: "90%",
        background: "#c5c7d2ff",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ color: "#2f3640", marginBottom: "15px" , textAlign:"center" }}>Liste des Commandes</h2>
      <table style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}>
        <thead>
          <tr>
            <th style={{padding:"12px"}}>Client</th>
            <th style={{padding:"12px"}}>Produit</th>
            <th style={{padding:"12px"}}>Quantité</th>
            <th style={{padding:"12px"}}>Total</th>
            <th style={{padding:"12px"}}>Statut</th>
          
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i}>
              <td style={{padding:"10px"}}>{order.name}</td>
              <td style={{padding:"10px"}}>{order.product}</td>
              <td style={{padding:"10px"}}>{order.quantity}</td>
              <td style={{padding:"10px"}}>{order.total} MAD</td>
              <td style={{padding:"10px"}}>{order.status}</td>
              <td><button onClick = {() => onDelete(i)} >Delete</button></td>
               
            </tr>
            
          ))}
        </tbody>
     
      </table>
    </div>
  );
}

export default OrderList;
