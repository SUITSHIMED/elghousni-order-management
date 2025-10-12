
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import OrderForm from "./components/Orderform";
import OrderList from "./components/Orderlist";
import Summary from "./components/Summary";

function App() {
  const [orders, setOrders] = useState([]);
  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  }
  };
  const handleDelete = (indexToDelete) => {
    const updatedOrders = orders.filter((_,index) => index !== indexToDelete);
    setOrders (updatedOrders);
  

  return (
        
      
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          width: "90%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        <OrderForm onAddOrder={addOrder} />
        <OrderList orders={orders} />
        <Summary orders={orders} />
      </div>
    </div>
      
  );
}

export default App;
