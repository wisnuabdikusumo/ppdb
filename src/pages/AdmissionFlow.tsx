"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Upload, DollarSign, Printer, Award, UserPlus } from "lucide-react";

const AdmissionFlow = () => {
  const steps = [
    { icon: <UserPlus />, title: "Pendaftaran Akun", description: "Buat akun pendaftar menggunakan email atau NISN yang valid." },
    { icon: <FileText />, title: "Pengisian Formulir", description: "Lengkapi data diri, orang tua, asal sekolah, dan pilihan jurusan." },
    { icon: <Upload />, title: "Unggah Berkas", description: "Unggah dokumen seperti KK, Akta, Ijazah/SKL, dan Pas Foto." },
    { icon: <CheckCircle />, title: "Finalisasi Data", description: "Periksa kembali semua data dan kunci data jika sudah benar." },
    { icon: <DollarSign />, title: "Pembayaran Pendaftaran", description: "Lakukan pembayaran biaya pendaftaran melalui metode yang tersedia." },
    { icon: <Printer />, title: "Cetak Kartu Peserta", description: "Unduh dan cetak Kartu Tanda Peserta Ujian/Seleksi." },
    { icon: <Award />, title: "Pengumuman Hasil", description: "Cek status kelulusan Anda pada tanggal yang ditentukan." },
    { icon: <CheckCircle />, title: "Daftar Ulang", description: "Bagi yang lulus, lakukan konfirmasi dan unggah berkas daftar ulang." },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">Alur Pendaftaran Siswa Baru</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Ikuti langkah-langkah mudah di bawah ini untuk menyelesaikan proses pendaftaran Anda.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative md:flex items-center md:w-full">
              <div className="md:w-1/2 md:pr-8 md:text-right">
                {index % 2 === 0 && (
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <CardTitle className="mb-2">{step.title}</CardTitle>
                    <p className="text-muted-foreground">{step.description}</p>
                  </Card>
                )}
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-2 rounded-full border-2 border-primary hidden md:block">
                <div className="h-8 w-8 text-primary flex items-center justify-center">{step.icon}</div>
              </div>
              <div className="md:w-1/2 md:pl-8">
                {index % 2 !== 0 && (
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <CardTitle className="mb-2">{step.title}</CardTitle>
                    <p className="text-muted-foreground">{step.description}</p>
                  </Card>
                )}
              </div>
              {/* Mobile view card */}
              <div className="md:hidden mt-4">
                 <Card className="p-6 hover:shadow-lg transition-shadow flex items-center gap-4">
                    <div className="text-primary">{step.icon}</div>
                    <div>
                      <CardTitle className="mb-1 text-lg">{step.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionFlow;