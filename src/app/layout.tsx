import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApplicationProviders } from "./ApplicationProviders";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lawyer Profile Project",
  description: "Lawyer Profile Project",
};

type RootLayoutProps = React.PropsWithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApplicationProviders>{children}</ApplicationProviders>
      </body>
    </html>
  );
}
