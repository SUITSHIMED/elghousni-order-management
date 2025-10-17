import useStore from "../store/useStore";

function ProductsPage() {
  const products = useStore((state) => state.products);

  return (
    <div  style={{
        marginLeft: "240px", 
        padding: "30px",
        backgroundColor: "#f1f2f6",
        minHeight: "100vh",
        boxSizing: "border-box",}}>
      <h1>Liste des Produits</h1>
      {products.length === 0 ? (
        <p>Aucun produit disponible.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix (MAD)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductsPage;
