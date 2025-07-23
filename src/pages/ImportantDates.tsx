"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const ImportantDates = () => {
  const dates = [
    { date: "20 Mei - 10 Juni 2024", event: "Pendaftaran Online", description: "Pembukaan dan penutupan pendaftaran akun serta pengisian formulir." },
    { date: "11 - 15 Juni 2024", event: "Verifikasi Berkas", description: "Panitia melakukan verifikasi kelengkapan dan keabsahan berkas." },
    { date: "18 Juni 2024", event: "Tes Seleksi (Jika Ada)", description: "Pelaksanaan tes potensi akademik atau wawancara bagi jalur tertentu." },
    { date: "25 Juni 2024", event: "Pengumuman Hasil Seleksi", description: "Pengumuman kelulusan dapat diakses melalui dasbor pendaftar." },
    { date: "26 Juni - 5 Juli 2024", event: "Daftar Ulang Online", description: "Bagi calon siswa yang lulus, wajib melakukan daftar ulang." },
    { date: "15 Juli 2024", event: "Awal Tahun Ajaran Baru", description: "Hari pertama masuk sekolah bagi siswa baru." },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">Jadwal Penting PPDB</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Catat tanggal-tanggal penting di bawah ini agar tidak ketinggalan informasi.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-5 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
        <div className="space-y-8">
          {dates.map((item, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-5 top-1 -translate-x-1/2 p-2 bg-primary rounded-full">
                <Calendar className="h-5 w-5 text-primary-foreground" />
              </div>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <p className="text-sm font-semibold text-primary mb-1">{item.date}</p>
                  <CardTitle className="text-xl mb-2">{item.event}</CardTitle>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;