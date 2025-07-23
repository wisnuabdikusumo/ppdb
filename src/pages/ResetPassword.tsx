"use client";

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } => "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client"; // Import Supabase client

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [tokenValidated, setTokenValidated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Supabase automatically handles session from URL hash for password reset
    // We just need to ensure the user is redirected to this page after clicking the email link.
    // A simple check for session or user might be added here if needed for more complex flows.
    setTokenValidated(true); // Assume token is valid if user reaches this page via the link
  }, []);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password dan konfirmasi password tidak cocok!");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) {
      toast.error(`Gagal mengatur ulang password: ${error.message}`);
    } else {
      toast.success("Password Anda berhasil diatur ulang! Silakan login.");
      navigate("/login"); // Redirect ke halaman login setelah berhasil reset
    }
    setLoading(false);
  };

  if (!tokenValidated) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-160px)] py-12">
        <Card className="w-[400px] text-center p-6">
          <CardTitle>Memvalidasi Tautan...</CardTitle>
          <CardDescription>Mohon tunggu sebentar.</CardDescription>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-160px)] py-12">
      <Card className="w-[400px]">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Atur Ulang Password</CardTitle>
          <CardDescription>
            Masukkan password baru Anda.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handlePasswordReset} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="new-password">Password Baru</Label>
              <Input
                id="new-password"
                type="password"
                placeholder="Masukkan password baru"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-new-password">Konfirmasi Password Baru</Label>
              <Input
                id="confirm-new-password"
                type="password"
                placeholder="Ulangi password baru"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Mengatur Ulang..." : "Atur Ulang Password"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;