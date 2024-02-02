import { UserData } from "@/types/types";
import { create } from "zustand";

export const useUserData = create<UserData>(() => ({
  bills: 1500,
  capital: 50000,
  monthly_expenses: [
    1200, 1500, 1000, 2000, 800, 1200, 900, 1800, 1600, 1300, 1100, 1400,
  ],
  name: "Adrián",
  number: "#1234",
  avatar: "https://picsum.photos/200/200",
}));
