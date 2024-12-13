import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  user: { firstname?: string; email?: string } | null;
  setAuth: (isAuthenticated: boolean, user: any) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  setAuth: (isAuthenticated, user) => set({ isAuthenticated, user }),
}));
