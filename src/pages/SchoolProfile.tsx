"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SchoolProfile = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Profil Sekolah</h1>

      <section className="mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Visi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">
              Menjadi institusi pendidikan unggulan yang mencetak generasi
              berakhlak mulia, cerdas, inovatif, dan berdaya saing global.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Misi</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
              <li>Menyelenggarakan pendidikan berkualitas yang berlandaskan nilai-nilai agama dan budaya.</li>
              <li>Mengembangkan potensi akademik dan non-akademik siswa secara optimal.</li>
              <li>Menciptakan lingkungan belajar yang kondusif, inspiratif, dan inklusif.</li>
              <li>Membekali siswa dengan keterampilan abad 21 dan jiwa kepemimpinan.</li>
              <li>Menjalin kerjasama yang harmonis dengan orang tua, masyarakat, dan industri.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Sejarah Singkat</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">
              SMA/SMK [Nama Sekolah Anda] didirikan pada tahun [Tahun Didirikan]
              dengan semangat untuk memberikan pendidikan terbaik bagi generasi
              muda. Sejak awal, kami berkomitmen untuk menciptakan lingkungan
              belajar yang inovatif dan mendukung perkembangan holistik siswa.
              Berawal dari [jumlah] siswa dan [jumlah] guru, kini kami telah
              berkembang menjadi salah satu sekolah terkemuka di wilayah ini,
              dengan ribuan alumni yang tersebar di berbagai bidang profesi.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Fasilitas Sekolah</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-lg text-muted-foreground space-y-2">
              <li>Ruang Kelas Ber-AC dengan Proyektor Interaktif</li>
              <li>Laboratorium Komputer Modern</li>
              <li>Laboratorium IPA (Fisika, Kimia, Biologi)</li>
              <li>Perpustakaan Digital dan Konvensional</li>
              <li>Lapangan Olahraga (Basket, Futsal, Voli)</li>
              <li>Aula Serbaguna</li>
              <li>Kantin Sehat</li>
              <li>Mushola/Masjid</li>
              <li>Ruang UKS</li>
              <li>Area Parkir Luas</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default SchoolProfile;