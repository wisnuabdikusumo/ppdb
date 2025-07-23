"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Upload, DollarSign, Printer, Award } from "lucide-react";

const AdmissionFlow = () => {
  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "1. Pendaftaran Akun",
      description: "Buat akun pendaftar menggunakan email atau NISN yang valid dan lakukan verifikasi email.",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "2. Pengisian Formulir",
      description: "Lengkapi data diri, data orang tua/wali, data asal sekolah, pilihan jurusan, nilai rapor, dan prestasi (jika ada).",
    },
    {
      icon: <Upload className="h-8 w-8 text-primary" />,
      title: "3. Unggah Berkas",
      description: "Unggah dokumen yang diperlukan seperti KK, Akta Kelahiran, Ijazah/SKL, Pas Foto, Rapor, dan Sertifikat Prestasi.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "4. Konfirmasi & Finalisasi",
      description: "Periksa kembali semua data yang telah diisi. Pastikan tidak ada kesalahan sebelum mengunci data.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "5. Pembayaran Pendaftaran",
      description: "Lakukan pembayaran biaya pendaftaran melalui metode yang tersedia (jika diperlukan).",
    },
    {
      icon: <Printer className="h-8 w-8 text-primary" />,
      title: "6. Cetak Kartu Peserta",
      description: "Setelah finalisasi, unduh dan cetak Kartu Tanda Peserta Ujian/Seleksi.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "7. Pengumuman Hasil",
      description: "Cek status kelulusan Anda pada tanggal yang telah ditentukan.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "8. Daftar Ulang Online",
      description: "Bagi yang lulus, lakukan konfirmasi kesediaan dan unggah berkas tambahan untuk daftar ulang.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Alur Pendaftaran Siswa Baru</h1>
      <p className="text-lg text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
        Ikuti langkah-langkah mudah di bawah ini untuk menyelesaikan proses pendaftaran Anda.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-6">
            <div className="mb-4">{step.icon}</div>
            <CardHeader className="p-0 pb-2">
              <CardTitle className="text-xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdmissionFlow;