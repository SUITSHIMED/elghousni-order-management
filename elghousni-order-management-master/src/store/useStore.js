import { create } from "zustand";
import products from "../data/products";
const useStore = create((set) => ({
  products, 
  orders: [],

  addOrder: (order) =>
    set((state) => ({
      orders: [...state.orders, order],
    })),

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
}));

export default useStore;


