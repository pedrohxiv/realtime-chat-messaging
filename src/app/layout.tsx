import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "@/components/providers";

import "@/style/global.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat Messaging",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
