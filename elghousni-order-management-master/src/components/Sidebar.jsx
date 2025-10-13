

function Sidebar({ setActivePage }) {
  return (
    <div
      style={{
        width: "220px",
        background: "#2f3640",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        height: "100vh",
      }}
    >
      <h2 style={{ color: "#00a8ff" }}>System</h2>
      <button
        onClick={() => setActivePage("form")}
        style={{ padding: "10px", background: "none", color: "white", border: "1px solid #00a8ff", borderRadius: "5px" }}
      >
        Créer Commande
      </button>
      <button
        onClick={() => setActivePage("list")}
        style={{ padding: "10px", background: "none", color: "white", border: "1px solid #00a8ff", borderRadius: "5px" }}
      >
        Liste des Commandes
      </button>
      <button
        onClick={() => setActivePage("summary")}
        style={{ padding: "10px", background: "none", color: "white", border: "1px solid #00a8ff", borderRadius: "5px" }}
      >
        Résumé
      </button>
    </div>
  );
}

export default Sidebar;
