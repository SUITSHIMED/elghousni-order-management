import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import OrdersPage from "./pages/OrdersPage";

function App() {
  const [orders, setOrders] = useState([]);

  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  const deleteOrder = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/orders"
            element={
              <OrdersPage
                orders={orders}
                onAddOrder={addOrder}
                onDelete={deleteOrder}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
