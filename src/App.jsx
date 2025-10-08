
import Navbar from "./components/NavBar";
import OrderForm from "./components/Orderform";
import ProductSelector from "./components/Productselector";
import OrderSummary from "./components/Ordersummary";
import OrderList from "./components/Orderlist";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <section className="left-card">
        
          <OrderForm />
          <ProductSelector />
        </section>

        <section className="right-card">
          <OrderList />
          <OrderSummary />
          
        </section>
      </main>
    </div>
  );
}

export default App;
