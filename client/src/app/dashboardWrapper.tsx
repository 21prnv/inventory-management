"use client";

import React, { useEffect } from "react";
import StoreProvider, { useAppSelector } from "./redux";
import Sidebar from "./[components]/Sidebar";
import Navbar from "./[components]/Navbar";
import { AlertTriangle } from "lucide-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  });

  return (
    <div
      className={`${
        isDarkMode ? "dark" : "light"
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <div className="flex items-center p-3 mb-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <AlertTriangle className="w-6 h-6 mr-2" />
          <span>
            Due to some issues with RDS, the data is currently not showing.
            Thanks for visiting my project.
          </span>
        </div>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
