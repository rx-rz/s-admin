import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type User = {
  id: string;
  email: string;
  isVerified: boolean | null;
  firstName: string | null;
  lastName: string | null;
};

export function decodeUserToken(token: string | undefined) {
  if (token) {
    const user = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    ) as User;
    return user;
  }
}
