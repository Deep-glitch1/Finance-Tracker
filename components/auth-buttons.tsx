"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

const ClerkLoaded = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.ClerkLoaded),
  { ssr: false }
);

const ClerkLoading = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.ClerkLoading),
  { ssr: false }
);

const UserButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.UserButton),
  { ssr: false }
);

export const AuthButtons = () => {
  return (
    <div className="relative">
      <div suppressHydrationWarning>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>

        <ClerkLoading>
          <Loader2 className="size-8 animate-spin text-slate-400" />
        </ClerkLoading>
      </div>
    </div>
  );
}; 