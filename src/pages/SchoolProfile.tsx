"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, CheckCircle, Building, Award } from "lucide-react";

const SchoolProfile = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-50/50">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">Profil SMK Unitomo Surabaya</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Mengenal lebih dekat tentang visi, misi, sejarah, dan fasilitas unggulan kami.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <Target className="h-10 w-10 text-primary" />
            <CardTitle className="text-2xl">Visi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">
              Menjadi institusi pendidikan unggulan yang mencetak generasi
              berakhlak mulia, cerdas, inovatif, dan berdaya saing global.
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <Award className="h-10 w-10 text-primary" />
            <CardTitle className="text-2xl">Misi</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
              <li>Menyelenggarakan pendidikan berkualitas.</li>
              <li>Mengembangkan potensi siswa secara optimal.</li>
              <li>Menciptakan lingkungan belajar yang kondusif.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl">Sejarah Singkat</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              SMK Unitomo Surabaya didirikan pada tahun [Tahun Didirikan]
              dengan semangat untuk memberikan pendidikan terbaik bagi generasi
              muda. Sejak awal, kami berkomitmen untuk menciptakan lingkungan
              belajar yang inovatif dan mendukung perkembangan holistik siswa.
              Kini kami telah berkembang menjadi salah satu sekolah terkemuka di wilayah ini.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl">Fasilitas Sekolah</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Kelas Ber-AC</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Lab Komputer</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Lab IPA</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Perpustakaan</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Lapangan Olahraga</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Aula Serbaguna</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Kantin Sehat</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /> Mushola</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SchoolProfile;