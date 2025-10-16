import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#2f3640",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "20px",
        boxSizing: "border-box"
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>System Management</h2>
      <Link to="/" style={{ color: "white", marginBottom: "15px", textDecoration: "none" }}>Dashboard</Link>
      <Link to="/orders" style={{ color: "white", marginBottom: "15px", textDecoration: "none" }}>Orders</Link>
      <Link to="/products" style={{ color: "white", textDecoration: "none" }}>Products</Link>
    </div>
  );
}
export default Sidebar;