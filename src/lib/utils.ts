import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const chatHrefContructor = (id1: string, id2: string) => {
  const sortedIds = [id1, id2].sort();

  return `${sortedIds[0]}--${sortedIds[1]}`;
};
