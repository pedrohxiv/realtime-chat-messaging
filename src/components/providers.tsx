"use client";

import { Toaster } from "sonner";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <Toaster richColors position="top-center" />
      {children}
    </>
  );
};
