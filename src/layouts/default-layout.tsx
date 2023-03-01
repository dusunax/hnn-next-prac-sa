import React from "react";
import Header from "@/layouts/header";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="h-screen flex justify-center">
      <div className="w-full max-w-screen-lg flex flex-col  drop-shadow-lg scroll-p-2 overflow-y-scroll scrollbar-hide overflow-x-hidden bg-gradient-to-b from-transparent via-[#eee] to-transparent">
        <Header />
        {children}
      </div>
    </div>
  );
};
