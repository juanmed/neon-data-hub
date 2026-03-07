import { mockUser } from "@/data/mock";
import type { User } from "@/types";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const authService = {
  async login(_email: string, _password: string): Promise<User> {
    await delay(500);
    return mockUser;
  },
  async logout(): Promise<void> {
    await delay(200);
  },
  async getCurrentUser(): Promise<User | null> {
    await delay(300);
    return mockUser;
  },
  async register(_email: string, _password: string, _username: string): Promise<User> {
    await delay(600);
    return { ...mockUser, id: "usr_new" };
  },
};
