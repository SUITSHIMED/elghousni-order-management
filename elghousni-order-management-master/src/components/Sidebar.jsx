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
      <a href="/" style={{ color: "white", marginBottom: "15px", textDecoration: "none" }}>Dashboard</a>
      <a href="/orders" style={{ color: "white", marginBottom: "15px", textDecoration: "none" }}>Orders</a>
      <a href="/products" style={{ color: "white", textDecoration: "none" }}>Products</a>
    </div>
  );
}
export default Sidebar;