"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner"; // Menggunakan toast dari sonner

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password });
    toast.info("Fitur login memerlukan backend. Ini hanya simulasi.");
    // Logika login akan diimplementasikan di sini dengan backend
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password dan konfirmasi password tidak cocok!");
      return;
    }
    console.log("Registration attempted with:", { email, password });
    toast.info("Fitur pendaftaran memerlukan backend. Ini hanya simulasi.");
    // Logika pendaftaran akan diimplementasikan di sini dengan backend
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-160px)] py-12">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Daftar</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Login</CardTitle>
              <CardDescription>
                Masuk ke akun Anda untuk melanjutkan pendaftaran.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-login">Email atau NISN</Label>
                  <Input
                    id="email-login"
                    type="text"
                    placeholder="Masukkan email atau NISN Anda"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Label htmlFor="password-login">Password</Label>
                    <Link
                      to="/lupa-password" // Rute ini perlu ditambahkan nanti
                      className="ml-auto inline-block text-sm underline"
                    >
                      Lupa password?
                    </Link>
                  </div>
                  <Input
                    id="password-login"
                    type="password"
                    placeholder="Masukkan password Anda"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Daftar Akun Baru</CardTitle>
              <CardDescription>
                Buat akun baru untuk memulai proses pendaftaran.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-register">Email</Label>
                  <Input
                    id="email-register"
                    type="email"
                    placeholder="Masukkan email Anda"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-register">Password</Label>
                  <Input
                    id="password-register"
                    type="password"
                    placeholder="Buat password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password-register">Konfirmasi Password</Label>
                  <Input
                    id="confirm-password-register"
                    type="password"
                    placeholder="Ulangi password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Daftar
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthPage;