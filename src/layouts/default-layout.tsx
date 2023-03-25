import React from "react";
// import Header from "@/layouts/header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="p-8 box-border h-screen flex justify-center">
      <div className="h-full w-full max-w-screen-lg flex flex-col">
        {children}
      </div>
    </div>
  );
}
