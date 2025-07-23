"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, FlaskConical, BookOpen, Code } from "lucide-react";

const MajorsInfo = () => {
  const majors = [
    {
      name: "IPA (Ilmu Pengetahuan Alam)",
      icon: <FlaskConical className="h-8 w-8 text-primary" />,
      description: "Fokus pada mata pelajaran sains seperti Fisika, Kimia, Biologi, dan Matematika. Mempersiapkan siswa untuk studi lanjut di bidang teknik, kedokteran, sains murni, dll.",
      quota: 120,
    },
    {
      name: "IPS (Ilmu Pengetahuan Sosial)",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      description: "Mempelajari Geografi, Sejarah, Sosiologi, dan Ekonomi. Cocok bagi siswa yang tertarik pada ilmu sosial, hukum, manajemen, komunikasi, dll.",
      quota: 120,
    },
    {
      name: "Bahasa",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      description: "Mendalami Bahasa Indonesia, Bahasa Inggris, dan bahasa asing lainnya. Membuka peluang karir di bidang penerjemahan, sastra, pariwis, dan hubungan internasional.",
      quota: 60,
    },
    {
      name: "Teknik Komputer dan Jaringan (SMK)",
      icon: <Code className="h-8 w-8 text-primary" />,
      description: "Mempelajari perakitan komputer, instalasi jaringan, dan pemrograman dasar. Mempersiapkan siswa untuk menjadi teknisi komputer, administrator jaringan, atau melanjutkan studi di bidang IT.",
      quota: 90,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Informasi Jurusan / Peminatan</h1>
      <p className="text-lg text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
        Pilih jurusan yang sesuai dengan minat, bakat, dan cita-citamu. Setiap jurusan dirancang untuk membekali siswa dengan pengetahuan dan keterampilan yang relevan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {majors.map((major, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-4">
              {major.icon}
              <div>
                <CardTitle className="text-xl">{major.name}</CardTitle>
                <CardDescription>Kuota: {major.quota} Siswa</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{major.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MajorsInfo;