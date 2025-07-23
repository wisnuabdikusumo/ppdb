"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ImportantDates = () => {
  const dates = [
    {
      date: "20 Mei - 10 Juni 2024",
      event: "Pendaftaran Online",
      description: "Pembukaan dan penutupan pendaftaran akun serta pengisian formulir.",
    },
    {
      date: "11 - 15 Juni 2024",
      event: "Verifikasi Berkas",
      description: "Panitia melakukan verifikasi kelengkapan dan keabsahan berkas pendaftar.",
    },
    {
      date: "18 Juni 2024",
      event: "Tes Seleksi (Jika Ada)",
      description: "Pelaksanaan tes potensi akademik atau wawancara bagi jalur tertentu.",
    },
    {
      date: "25 Juni 2024",
      event: "Pengumuman Hasil Seleksi",
      description: "Pengumuman kelulusan dapat diakses melalui dasbor pendaftar.",
    },
    {
      date: "26 Juni - 5 Juli 2024",
      event: "Daftar Ulang Online",
      description: "Bagi calon siswa yang lulus, wajib melakukan daftar ulang dan melengkapi berkas tambahan.",
    },
    {
      date: "15 Juli 2024",
      event: "Awal Tahun Ajaran Baru",
      description: "Hari pertama masuk sekolah bagi siswa baru.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Jadwal Penting PPDB</h1>
      <p className="text-lg text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
        Catat tanggal-tanggal penting di bawah ini agar tidak ketinggalan informasi.
      </p>

      <div className="space-y-6">
        {dates.map((item, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0 md:w-1/4">
                  <p className="text-lg font-semibold text-primary">{item.date}</p>
                </div>
                <div className="md:w-3/4">
                  <CardTitle className="text-xl mb-2">{item.event}</CardTitle>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </CardContent>
            {index < dates.length - 1 && <Separator className="mx-6" />}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ImportantDates;