import { mockSessions } from "@/data/mock";
import type { Session } from "@/types";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const sessionService = {
  async list(): Promise<Session[]> {
    await delay(400);
    return mockSessions;
  },
  async getById(id: string): Promise<Session | undefined> {
    await delay(300);
    return mockSessions.find((s) => s.id === id);
  },
  async create(data: Partial<Session>): Promise<Session> {
    await delay(500);
    return { ...mockSessions[0], ...data, id: "ses_new" };
  },
};
