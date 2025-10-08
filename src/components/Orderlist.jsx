import React from "react";

function OrderList() {
  return (
    <div className="order-list">
      <h2>Liste des Commandes</h2>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Total</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ahmed</td>
            <td>Huile d'olive</td>
            <td>2</td>
            <td>240 MAD</td>
            <td>En attente</td>
          </tr>
          <tr>
            <td>Ali</td>
            <td>Miel</td>
            <td>1</td>
            <td>90 MAD</td>
            <td>Livrée</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
