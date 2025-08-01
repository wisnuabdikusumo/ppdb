"use client";

import * as React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useSession } from "@/contexts/SessionContext";
import { LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const { session, loading } = useSession();
  const user = session?.user;

  return (
    <div className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          PPDB SMK Unitomo Surabaya
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Beranda
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/profil-sekolah">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Profil Sekolah
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/jurusan">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Jurusan
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/alur-pendaftaran">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Alur Pendaftaran
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/jadwal">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Jadwal
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/faq">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/kontak">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Kontak
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {loading ? (
          <div className="w-24 h-10 bg-gray-200 rounded-md animate-pulse"></div>
        ) : user ? (
          <Button asChild>
            <Link to="/dashboard/formulir">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dasbor
            </Link>
          </Button>
        ) : (
          <Button asChild>
            <Link to="/login">Daftar / Login</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;