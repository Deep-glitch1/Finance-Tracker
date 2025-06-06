"use client";

import Link from "next/link";

import { links } from "@/config";
import { AuthButtons } from "./auth-buttons";
import { Filters } from "./filters";
import { HeaderLogo } from "./header-logo";
import { Navigation } from "./navigation";
import { WelcomeMsg } from "./welcome-msg";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-green-700 to-green-500 px-4 py-8 lg:px-14 lg:pb-32">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-14 flex w-full items-center justify-between">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>

          <div className="flex items-center gap-x-2">
            <AuthButtons />

            <Link
              href={links.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              title="Source Code"
            >
            </Link>
          </div>
        </div>

        <WelcomeMsg />
        <Filters />
      </div>
    </header>
  );
};
