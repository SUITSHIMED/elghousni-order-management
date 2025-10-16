import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import OrdersPage from "./pages/OrdersPage";
import products from "./data/products";
import ProductsPage from "./pages/Products";
import Layout from "./layout/layout";

function App() {
  const [orders, setOrders] = useState([]);

  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  const deleteOrder = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route index element={<Dashboard />} />
        <Route
          path="orders"
          element={
            <OrdersPage
              orders={orders}
              onAddOrder={addOrder}
              onDelete={deleteOrder}
              products={products}
            />
          }
        />
        <Route path="products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default App;