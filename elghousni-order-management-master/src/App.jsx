
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import OrderForm from "./components/Orderform";
import OrderList from "./components/Orderlist";
import Summary from "./components/Summary";

function App() {
  const [orders, setOrders] = useState([]);
   const [activePage, setActivePage] = useState("form");

  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  }
  
  const handleDelete = (indexToDelete) => {
    const updatedOrders = orders.filter((_,index) => index !== indexToDelete);
    setOrders (updatedOrders);
    };
  

  return (
        
      
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar setActivePage={setActivePage} />

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
         {activePage === "form" && <OrderForm onAddOrder={addOrder} />}
        {activePage === "list" && <OrderList orders={orders} onDelete={handleDelete} />}
        {activePage === "summary" && <Summary orders={orders} />}
      </div>
    </div>
      
  );
}

export default App;
