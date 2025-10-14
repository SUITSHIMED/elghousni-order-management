import { create } from "zustand";

const useStore = create((set) => ({
  // State
  orders: [],
  products: [],

  // Orders actions
  addOrder: (order) =>
    set((state) => ({ orders: [...state.orders, order] })),

  deleteOrder: (index) =>
    set((state) => ({
      orders: state.orders.filter((_, i) => i !== index),
    })),

  changeStatus: (index, newStatus) =>
    set((state) => ({
      orders: state.orders.map((order, i) =>
        i === index ? { ...order, status: newStatus } : order
      ),
    })),

  // Products actions
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),

  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),

  editProduct: (id, updatedProduct) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, ...updatedProduct } : p
      ),
    })),
}));

export default useStore;
