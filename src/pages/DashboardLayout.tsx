"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import ProtectedRoute from "@/components/dashboard/ProtectedRoute";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-grow p-6 bg-muted/40">
          <Outlet />
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardLayout;