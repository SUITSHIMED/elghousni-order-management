import useStore from "../store/useStore";
import { useState } from "react";

function ProductPage() {
  const products = useStore((state) => state.products);
  const addProduct = useStore((state) => state.addProduct);
  const deleteProduct = useStore((state) => state.deleteProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    addProduct({ id: Date.now(), name, price: Number(price) });
    setName("");
    setPrice("");
  };

  return (
    <div>
      <h1>Produits</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Nom du produit"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Prix"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price} MAD
            <button onClick={() => deleteProduct(p.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;
