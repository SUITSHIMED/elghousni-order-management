
import { useParams, Link } from "react-router-dom";

function OrderDetail() {
  const { id } = useParams(); 

  return (
    <div>
      <h1>Order Details</h1>
      <p>Showing details for order ID: {id}</p>

      
      <Link to="/orders">← Back to orders</Link>
    </div>
  );
}

export default OrderDetail;
