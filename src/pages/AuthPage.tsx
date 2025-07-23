"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase"; // Import Supabase client

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(`Login gagal: ${error.message}`);
    } else {
      toast.success("Login berhasil! Mengarahkan ke beranda...");
      navigate("/"); // Redirect ke halaman utama setelah login berhasil
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password dan konfirmasi password tidak cocok!");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      toast.error(`Pendaftaran gagal: ${error.message}`);
    } else if (data.user) {
      toast.success("Pendaftaran berhasil! Silakan cek email Anda untuk verifikasi.");
      // Opsional: arahkan pengguna ke halaman verifikasi email atau beranda
    } else {
      toast.info("Pendaftaran berhasil, tetapi perlu verifikasi email. Silakan cek email Anda.");
    }
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
                  <Label htmlFor="email-login">Email</Label>
                  <Input
                    id="email-login"
                    type="email"
                    placeholder="Masukkan email Anda"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Label htmlFor="password-login">Password</Label>
                    <Link
                      to="/lupa-password"
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