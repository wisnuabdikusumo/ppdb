"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, GraduationCap, Info } from "lucide-react";
import { useSession } from "@/contexts/SessionContext";

const Homepage = () => {
  const { session, loading } = useSession();
  const user = session?.user;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Selamat Datang di PPDB Online SMA/SMK
        </h1>
        {user && (
          <p className="text-xl md:text-2xl font-semibold text-secondary-foreground mb-4">
            Halo, {user.email}!
          </p>
        )}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Wujudkan masa depan cerahmu bersama kami! Daftarkan dirimu sekarang
          dan jadilah bagian dari keluarga besar sekolah kami.
        </p>
        {!user && (
          <Button size="lg" asChild>
            <Link to="/login">Daftar Sekarang</Link>
          </Button>
        )}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Jadwal Penting</CardTitle>
            <CalendarDays className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold mb-2">20 Mei - 10 Juni 2024</p>
            <p className="text-sm text-muted-foreground">
              Pendaftaran Online Dibuka
            </p>
            <Button variant="link" className="mt-2 p-0" asChild>
              <Link to="/jadwal">Lihat Selengkapnya</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Jurusan Unggulan</CardTitle>
            <GraduationCap className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold mb-2">IPA, IPS, Bahasa & Teknik Komputer</p>
            <p className="text-sm text-muted-foreground">
              Pilih sesuai minat dan bakatmu
            </p>
            <Button variant="link" className="mt-2 p-0" asChild>
              <Link to="/jurusan">Pelajari Jurusan</Link>
            </CardContent>
          </Card>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Alur Pendaftaran</CardTitle>
            <Info className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold mb-2">Mudah & Cepat</p>
            <p className="text-sm text-muted-foreground">
              Ikuti langkah-langkah sederhana
            </p>
            <Button variant="link" className="mt-2 p-0" asChild>
              <Link to="/alur-pendaftaran">Lihat Alur</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Mengapa Memilih Kami?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Fasilitas Lengkap</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Laboratorium modern, perpustakaan digital, dan area olahraga.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pengajar Berkompeten</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Guru-guru berpengalaman dan berdedikasi tinggi.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Lingkungan Kondusif</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Suasana belajar yang nyaman dan mendukung perkembangan siswa.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Homepage;