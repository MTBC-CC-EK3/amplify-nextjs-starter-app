"use client";
import React from "react";
import { Header, Footer } from "component";

type RootLayoutProps = React.PropsWithChildren;

export const RootLayout = React.memo(function HomeScreen({
  children,
}: RootLayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
});
