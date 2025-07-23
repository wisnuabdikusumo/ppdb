"use client";

import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FileText, Upload, CheckCircle, DollarSign, Award, Printer, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const navItems = [
  { href: "/dashboard/formulir", label: "Isi Formulir", icon: FileText },
  { href: "/dashboard/berkas", label: "Unggah Berkas", icon: Upload },
  { href: "/dashboard/finalisasi", label: "Finalisasi Data", icon: CheckCircle },
  { href: "/dashboard/pembayaran", label: "Pembayaran", icon: DollarSign },
  { href: "/dashboard/kartu", label: "Cetak Kartu", icon: Printer },
  { href: "/dashboard/hasil", label: "Lihat Hasil", icon: Award },
];

const Sidebar = () => {
  const location = useLocation();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error(`Logout gagal: ${error.message}`);
    } else {
      toast.success("Anda telah berhasil logout.");
      // Redirect handled by ProtectedRoute
    }
  };

  return (
    <aside className="w-64 flex-shrink-0 border-r bg-background flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Dasbor Siswa</h2>
      </div>
      <nav className="flex-grow p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              location.pathname.startsWith(item.href) && "bg-muted text-primary"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t">
        <Button variant="outline" className="w-full" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;