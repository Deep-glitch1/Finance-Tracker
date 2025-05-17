import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config";
import { QueryProviders } from "@/providers/query-provider";
import { SheetProvider } from "@/providers/sheet-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#3d82f6",
};

export const metadata: Metadata = siteConfig;

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider appearance={{ baseTheme: undefined }}>
          <QueryProviders>
            <SheetProvider />
            <Toaster richColors theme="light" />
            {children}
          </QueryProviders>
        </ClerkProvider>
      </body>
    </html>
  );
};

export default RootLayout;
