import Summary from "../components/Summary";

function Dashboard() {
  return (
    <div
      style={{
        marginLeft: "240px", 
        padding: "30px",
        backgroundColor: "#f1f2f6",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ color: "#2f3640", marginBottom: "20px" }}>Dashboard</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Summary />
      </div>
    </div>
  );
}

export default Dashboard;
