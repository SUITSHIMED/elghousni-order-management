

function Sidebar() {
  return (
    <div
      style={{
        width: "200px",
        backgroundColor: "#2f3542",
        color: "white",
        padding: "20px",
      }}
    >
      <h3>Menu</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Orders</li>
        <li>Products</li>
        <li>Summary</li>
      </ul>
    </div>
  );
}

export default Sidebar;
