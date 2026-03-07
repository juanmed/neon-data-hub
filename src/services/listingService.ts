import { mockListings } from "@/data/mock";
import type { Listing } from "@/types";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const listingService = {
  async list(): Promise<Listing[]> {
    await delay(400);
    return mockListings;
  },
  async getById(id: string): Promise<Listing | undefined> {
    await delay(300);
    return mockListings.find((l) => l.id === id);
  },
  async search(query: string): Promise<Listing[]> {
    await delay(400);
    return mockListings.filter(
      (l) => l.title.toLowerCase().includes(query.toLowerCase()) || l.tags.some((t) => t.includes(query.toLowerCase()))
    );
  },
};
