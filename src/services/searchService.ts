import { mockListings } from "@/data/mock";
import type { Listing } from "@/types";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const searchService = {
  async search(query: string): Promise<Listing[]> {
    await delay(400);
    if (!query) return mockListings;
    return mockListings.filter(
      (l) => l.title.toLowerCase().includes(query.toLowerCase()) || l.tags.some((t) => t.includes(query.toLowerCase()))
    );
  },
};
