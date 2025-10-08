function OrderForm() {
  return (
    <div className="order-form">
      <h2>Formulaire de Commande</h2>
      

      <div className="input">
        <label>Nom du client:</label>
        <input type="text" placeholder="Entrez le nom" />
      </div>

      <div>
        <label>Produit:</label>
        <select>
          <option>Huile d'olive</option>
          <option>Olives Beldi</option>
          <option>Tapenade</option>
          <option>Miel</option>
        </select>
      </div>

      <div>
        <label>Quantité:</label>
        <input type="number" placeholder="1" />
      </div>

      <button>Créer la commande</button>
    </div>
  );
}

export default OrderForm;
