import type { APIKey } from "@/types";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

const mockKeys: APIKey[] = [
  { id: "key_001", userId: "usr_001", name: "Production", prefix: "gai_prod_", createdAt: "2025-03-01T10:00:00Z", lastUsedAt: "2025-06-10T08:00:00Z" },
];

export const apiKeyService = {
  async list(): Promise<APIKey[]> { await delay(300); return mockKeys; },
  async create(name: string): Promise<APIKey> { await delay(400); return { id: "key_new", userId: "usr_001", name, prefix: "gai_new_", createdAt: new Date().toISOString() }; },
  async revoke(_id: string): Promise<void> { await delay(300); },
};
