import type { Order } from "@/types";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

const mockOrders: Order[] = [
  { id: "ord_001", buyerId: "usr_001", listingId: "lst_002", amount: 79.99, currency: "USD", status: "completed", createdAt: "2025-06-08T12:00:00Z" },
];

export const orderService = {
  async list(): Promise<Order[]> { await delay(300); return mockOrders; },
  async create(listingId: string): Promise<Order> {
    await delay(500);
    return { id: "ord_new", buyerId: "usr_001", listingId, amount: 0, currency: "USD", status: "pending", createdAt: new Date().toISOString() };
  },
};
