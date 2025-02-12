import {clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...include: ClassValue[]) {
  return twMerge(clsx(include));
}